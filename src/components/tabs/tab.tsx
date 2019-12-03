import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "pxly-tab",
  shadow: true
})
export class Tab {
  @Prop() label: string;

  @Prop() active: boolean;

  @Prop({ reflectToAttr: true }) disabled: boolean;
}