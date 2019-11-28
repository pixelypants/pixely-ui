import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pxly-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  @Prop({ reflectToAttr: true })
  disabled: boolean;

  render() {
    return (
      <button disabled={this.disabled}>
        <slot></slot>
      </button>
    );
  }

}
