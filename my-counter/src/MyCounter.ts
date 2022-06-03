import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class MyCounter extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: sans-serif;
    }
    button {
      background: blue;
      color: white;
      border: 1px solid navy;
      cursor: pointer;
    }
    button:hover {
      background-color: navy;
    }
    button:focus {
      outline-color: aqua;
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) count = 5;

  _increment() {
    this.count += 1;
  }

  _decrement() {
    this.count -= 1;
  }

  protected render() {
    return html`
      <slot name="title">Fallback Title Here</slot>
      <button @click="${this._decrement}" part="btn-minus">-</button>
      <span part="count-number">${this.count}</span>
      <button @click="${this._increment}" part="btn-plus">+</button>
    `;
  }
}
