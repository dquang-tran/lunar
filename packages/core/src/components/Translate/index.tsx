import React from 'react';
import Core from '../..';
import { TranslateParams, TranslateProps, TranslateOptions } from '../../types';

export type Props = TranslateProps;

/** Translate a phrase with a context and dynamic params. */
export default class Translate extends React.PureComponent<Props> {
  static defaultProps = {
    html: false,
  };

  static phrase(
    phrase: string,
    params: TranslateParams,
    options?: string | TranslateOptions,
  ): string {
    return Core.translate(phrase, params, options);
  }

  render() {
    const { translatorComponent: Translator } = Core.settings;
    const { children, k: key, phrase, context, ...params } = this.props;
    const options: TranslateOptions = { context, key };

    if (!Translator) {
      return <span>{Core.translate(phrase, params as any, options)}</span>;
    }

    return <Translator k={key} phrase={phrase} context={context} {...(params as any)} />;
  }
}
