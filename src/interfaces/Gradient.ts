import { ColorableValue } from '@/types'
import { IColor } from '.'

/*
 * Gradient interface.
 */
export interface IGradient {
  /**
   * Set color to the gradient at the offset.
   *
   * @param offset offset index(0-1).
   * @param color colorable value. see {@link ColorableValue}
   */
  set(offset: number, color: ColorableValue): this

  /**
   * Returns color from the gradient at the offset.
   *
   * @param offset offset index(0-1).
   */
  get(offset: number): IColor

  /**
   * Delete color from the gradient at the offset.
   *
   * @param offset offset index(0-1).
   */
  delete(offset: number): this

  /**
   * Calculate color of the gradient at the offset.
   *
   * @param offset offset index(0-1).
   */
  take(offset: number): IColor
}
