import { DrawStyle } from '@/types'

/**
 * Renderer interface.
 */
export interface IRenderer {
  /**
   * draw filled rect.
   *
   * @param x left top x.
   * @param y left top y.
   * @param width width.
   * @param height height.
   * @param color color of fill.
   */
  fillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: DrawStyle
  ): void
}
