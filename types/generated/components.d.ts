import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutAbout extends Schema.Component {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'String';
    icon: 'information';
    description: '';
  };
  attributes: {
    string: Attribute.String & Attribute.Required;
  };
}

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

export interface FeedbackFeedback extends Schema.Component {
  collectionName: 'components_feedback_feedbacks';
  info: {
    displayName: 'Paragraph';
    icon: 'italic';
    description: '';
  };
  attributes: {
    paragraph_1: Attribute.Text & Attribute.Required;
    paragraph_2: Attribute.Text;
    paragraph_red: Attribute.Text;
  };
}

export interface HowitworkHowItWork extends Schema.Component {
  collectionName: 'components_howitwork_how_it_works';
  info: {
    displayName: 'How it work';
    icon: 'monitor';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Text & Attribute.Required;
    image: Attribute.Media;
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
    title: Attribute.String & Attribute.Required;
    dish: Attribute.Component<'menu.dish', true>;
    kcal: Attribute.String;
    prots: Attribute.String;
    fats: Attribute.String;
    carbs: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.about': AboutAbout;
      'faq.answer': FaqAnswer;
      'faq.faq': FaqFaq;
      'feedback.feedback': FeedbackFeedback;
      'howitwork.how-it-work': HowitworkHowItWork;
      'menu.dish': MenuDish;
      'menu.menu': MenuMenu;
    }
  }
}
