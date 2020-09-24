import { IRenderer } from './Renderer'

/**
 * App interface.
 */
export interface IApp {
  /**
   * view element.
   */
  readonly view: HTMLElement

  /**
   * renderer.
   */
  readonly renderer: IRenderer

  /**
   * width.
   */
  width: number

  /**
   * height.
   */
  height: number

  /**
   * add a function to be called at each frame.
   *
   * @param callback callback function to be called on each frame.
   */
  onFrame(callback: () => void): void
}
