import { ComponentProps, ReactNode } from 'react';
import { RecipeVariants } from '@vanilla-extract/recipes';

import { button } from './button.css';

type ButtonRecipe = NonNullable<RecipeVariants<typeof button>>;
type ColorType = NonNullable<ButtonRecipe['color']>;
type VariantType = NonNullable<ButtonRecipe['variant']>;

export type ButtonPreset =
  | 'mini_primary'
  | 'mini_outlined'
  | 'small_primary'
  | 'small_secondary'
  | 'small_outlined'
  | 'medium_primary'
  | 'medium_secondary'
  | 'medium_outlined'
  | 'large_primary'
  | 'large_secondary'
  | 'large_outlined'
  | 'text_ghost';

interface ButtonProps extends Omit<ComponentProps<'button'>, 'className'> {
  preset: ButtonPreset;
  children: ReactNode;
}

const Button = ({ preset, children, ...rest }: ButtonProps) => {
  const [variant, color] = preset.split('_') as [VariantType, ColorType];

  return (
    <button className={button({ variant, color })} {...rest}>
      {children}
    </button>
  );
};

export default Button;
