import { IColorable } from '.'

/*
 * Color interface.
 */
export interface IColor extends IColorable {
  /**
   * Red(0-255).
   */
  red: number

  /**
   * Blue(0-255).
   */
  blue: number

  /**
   * Green(0-255).
   */
  green: number

  /**
   * Alpha(0-1).
   */
  alpha: number
}
