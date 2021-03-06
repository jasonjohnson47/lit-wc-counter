import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { MyCounter } from '../src/MyCounter.js';
import '../src/my-counter.js';

describe('MyCounter', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MyCounter>(html`<my-counter></my-counter>`);

    expect(el.title).to.equal('Hey there');
    expect(el.count).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<MyCounter>(html`<my-counter></my-counter>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.count).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MyCounter>(
      html`<my-counter title="attribute title"></my-counter>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MyCounter>(html`<my-counter></my-counter>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
