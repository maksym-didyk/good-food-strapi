import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuDish extends Schema.Component {
  collectionName: 'components_menu_dishes';
  info: {
    displayName: 'Dish';
    icon: 'restaurant';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'Menu';
    icon: 'file';
    description: '';
  };
  attributes: {
    day: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 7;
      }> &
      Attribute.DefaultTo<1>;
    title: Attribute.String;
    dish: Attribute.Component<'menu.dish', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.dish': MenuDish;
      'menu.menu': MenuMenu;
    }
  }
}
