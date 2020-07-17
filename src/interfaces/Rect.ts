import { IPointable, IMovableByPointable, IQuad, IPositionSettable } from './'

/*
 * Rect interface.
 */
export interface IRect
  extends IPointable,
    IPositionSettable,
    IMovableByPointable<IQuad> {
  /**
   * Width.
   */
  width: number

  /**
   * Height.
   */
  height: number

  /**
   * Set width and height by given width and given height.
   *
   * @param width width to set.
   * @param height height to set.
   */
  setSize(width: number, height: number): this

  /**
   * Set width and height by given size.
   *
   * @param size size to set.
   */
  setSize(size: number): this

  /**
   * Returns rect converted to quad.
   */
  toQuad(): IQuad
}
