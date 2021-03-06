import { Component, Prop } from '@stencil/core';
import {  getURL } from '../utils/index';
import { LiskButton } from '../lisk-button/lisk-button';

@Component({
  tag: 'lisk-button-send',
  styleUrl: '../lisk-button/lisk-button.scss',
  shadow: true
})
export class LiskButtonSend extends LiskButton {
  constructor() {
    super();
    this.open = this.open.bind(this);
  }

  @Prop() amount: number;
  @Prop() recipient: string;
  @Prop() title: string

  open() {
    const { amount, recipient } = this;
    const url = getURL('send', { amount, recipient });
    this.openUrl(url);
  }

  render() {
    return <button class={`btn btn-primary ${this.loading ? 'loading' : ''} ${this.showTooltip ? 'tooltip' : ''}`}
                   onClick={this.open}
                   data-tooltip={this.getTooltipText()}>{this.title || `Send ${this.amount} LSK to ${this.recipient}`}</button>
  }
}
