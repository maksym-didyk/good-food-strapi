import type { Schema, Attribute } from '@strapi/strapi';

export interface FaqAnswer extends Schema.Component {
  collectionName: 'components_faq_answers';
  info: {
    displayName: 'Question';
    icon: 'question';
    description: '';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.Text;
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    questions: Attribute.Component<'faq.answer', true>;
  };
}

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
    title: Attribute.String;
    dish: Attribute.Component<'menu.dish', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'faq.answer': FaqAnswer;
      'faq.faq': FaqFaq;
      'menu.dish': MenuDish;
      'menu.menu': MenuMenu;
    }
  }
}
