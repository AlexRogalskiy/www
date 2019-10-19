import { LitElement, html } from 'lit-element';

export class WiredVideoDemo extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 16px;
        font-size: 16px;
      }
    
      .pink {
        --wired-video-highlight-color: purple;
      }
    </style>
    <p>
      <wired-video autoplay playsinline muted loop
        src="https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4">
      </wired-video>
    </p>
    <p>
      <wired-video class="pink" src="https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4">
      </wired-video>
    </p>
    `;
  }
}
customElements.define('wired-video-demo', WiredVideoDemo);