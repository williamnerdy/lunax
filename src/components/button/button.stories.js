import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './button';

storiesOf('Button', module)
  .add('with primary color', () => <Button primary>Primary Button</Button>)
  .add('with secondary color', () => (
    <Button secondary>Secondary Button</Button>
  ))
  .add('with success color', () => <Button success>Success Button</Button>)
  .add('with warning color', () => <Button warning>Warning Button</Button>)
  .add('with error color', () => <Button error>Error Button</Button>);
