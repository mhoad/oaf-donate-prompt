import { html, css, LitElement, property, UpdatingElement } from 'lit-element';

enum GIVING_FREQUENCY {
  MONTHLY,
  ONE_TIME
};

export class OafDonatePrompt extends LitElement {
  static styles =css`
    :host {
      display: block;
      color: var(--oaf-donate-prompt-text-color, #000);
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: "Whitney SSm A", "Whitney SSm B", Helvetica, Arial, sans-serif;
      max-width: 30em;
      background-color: var(--oaf-donate-prompt-background-color, rgb(47, 96, 103));
      padding-bottom: 1.5rem;
    }

    .giving_frequency {
      margin: 1.5rem;
      display: flex;
      width: 100%;
      justify-content: space-between;

    }

    .giving_frequency button {
      background: rgba(206, 72, 45, 0.55);
      border: 0;
      text-transform: uppercase;
      font-size: 15px;
      padding: 1em 3em;
      color: white;
      letter-spacing: 2px;
      font-weight: 600;
    }

    .giving_frequency button.active {
      background: rgba(206, 72, 45, 1);
      border: 1px solid white;
    }

    .amount_options {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .amount_options a {
      background: white;
      color: var(--oaf-donate-prompt-background-color, rgb(47, 96, 103));
      padding: 1.5rem 1rem;
      text-decoration: none;
      display: inline-block;
      text-align: center;
      font-size: 1em;
      font-weight: 600;
      min-width: 3rem;
      border-radius: 5px;
      letter-spacing: 2px;
      border: 2px solid black;
      text-transform: uppercase;
    }

    .amount_options a:hover {
      transform: scale(1.1);
    }
  `;

  private static __monthlyButtons = html`
    <a href="https://oneacrefund.org/give/recurring/?amount=7.50">$7.50</a>
    <a href="https://oneacrefund.org/give/recurring/?amount=15">$15</a>
    <a href="https://oneacrefund.org/give/recurring/?amount=30">$30</a>
    <a href="https://oneacrefund.org/give/recurring/">Other</a>
  `;

  private static __oneTimeButtons = html`
    <a href="https://oneacrefund.org/give/one-time/?amount=15">$15</a>
    <a href="https://oneacrefund.org/give/one-time/?amount=35">$35</a>
    <a href="https://oneacrefund.org/give/one-time/?amount=75">$75</a>
    <a href="https://oneacrefund.org/give/one-time/">Other</a>
  `;
  
  @property({type: GIVING_FREQUENCY}) selectedGivingFrequency = GIVING_FREQUENCY.MONTHLY;

  __selectMonthly() {
    this.selectedGivingFrequency = GIVING_FREQUENCY.MONTHLY;
  }

  __selectOneTime() {
    this.selectedGivingFrequency = GIVING_FREQUENCY.ONE_TIME;
  }

  render() {
    return html`
      <section class="container">
        <section class="giving_frequency">
          <button @click=${this.__selectMonthly} class="${this.selectedGivingFrequency === GIVING_FREQUENCY.MONTHLY ? "active" : ""}">Recurring Gift</button>
          <button @click=${this.__selectOneTime} class="${this.selectedGivingFrequency === GIVING_FREQUENCY.ONE_TIME ? "active" : ""}">One-Time Gift</button>
        </section>
        <section class="amount_options">
          ${this.selectedGivingFrequency === GIVING_FREQUENCY.MONTHLY ? OafDonatePrompt.__monthlyButtons : OafDonatePrompt.__oneTimeButtons }
        </section>
      </section>
    `;
  }
}
