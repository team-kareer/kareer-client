const parseSseEvent = (
  block: string,
): {
  event: string;
  data: string;
} => {
  const data: string[] = [];
  let event = 'message';

  block.split(/\r?\n/).forEach((line) => {
    const [field, ...values] = line.split(':');
    const value = values.join(':').replace(/^ /, '');

    if (field === 'event') {
      event = value;
    }

    if (field === 'data') {
      data.push(value);
    }
  });

  return { event, data: data.join('\n') };
};

export const parseSseEvents = (buffer: string, flush = false) => {
  const blocks = buffer.split(/\r?\n\r?\n/);
  const remaining = flush ? '' : (blocks.pop() ?? '');
  const events = blocks.filter(Boolean).map(parseSseEvent);

  return { events, remaining };
};
