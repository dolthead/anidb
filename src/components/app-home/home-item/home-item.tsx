import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'home-item',
  styleUrl: 'home-item.scss'
})
export class HomeItem {

  @Prop() anime: any;

  render() {
    return (
      <ion-item>
          <ion-avatar slot="start">
            <lazy-avatar src={this.anime.coverImage.medium} alt="anime avatar"/>
          </ion-avatar>
        <stencil-route-link url={'/details/' + this.anime.id}>
          {this.anime.title.romaji}
        </stencil-route-link>
      </ion-item>
    );
  }
}