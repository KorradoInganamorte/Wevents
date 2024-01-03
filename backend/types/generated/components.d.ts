import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementCard extends Schema.Component {
  collectionName: 'components_element_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    country: Attribute.String;
    date: Attribute.Date;
    price: Attribute.String;
    description: Attribute.Text;
    event: Attribute.String;
    founded: Attribute.String;
    year: Attribute.String;
    image_more: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'element.card': ElementCard;
    }
  }
}
