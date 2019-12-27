import {
  Component,
  h,
  Element,
  Event,
  EventEmitter,
  Method,
  State
} from "@stencil/core";
import { CssClassMap } from "../../utils/interfaces";

@Component({
  tag: "pxly-tabs",
  styleUrl: "tabs.scss",
  shadow: true
})
export class Tabs {
  @Element()
  el: HTMLElement;

  @Event({ eventName: "tabClicked" })
  onTabClicked: EventEmitter;

  @State()
  tabs: HTMLPxlyTabElement[] = [];

  componentWillLoad() {
    this.tabs = Array.from(this.el.querySelectorAll("pxly-tab"));
    if (this.tabs.length === 0) {
      throw new Error("[pxly-buttons] Must have at least one tab");
    }
  }

  @Method()
  async openTab(index: number) {
    if (index >= this.tabs.length) {
      throw new Error(
        `[pxly-buttons] Index ${index} is out of bounds of tabs length`
      );
    }
    if (!this.tabs[index].disabled) {
      this.tabs = this.tabs.map((tab, i) => {
        tab.active = i === index;
        return tab;
      });
      this.onTabClicked.emit({ tabId: index });
    }
  }

  render() {
    const classMap = this.getCssClassMap();

    return (
      <div class={classMap}>
        {this.tabs.map((tab: HTMLPxlyTabElement, index: number) => {
          const tabClassMap: CssClassMap = {
            "tab-button": true,
            active: tab.active
          };

          return (
            <button
              role="tab"
              disabled={tab.disabled}
              class={tabClassMap}
              onClick={() => this.openTab(index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    );
  }

  private getCssClassMap(): CssClassMap {
    return {
      "tabs-list": true
    };
  }
}
