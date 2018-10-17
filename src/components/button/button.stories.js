import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './button';

storiesOf('Button', module)
  .add('Default', () => (
    <React.Fragment>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button success>Success</Button>
      <Button warning>Warning</Button>
      <Button danger>Danger</Button>
      <Button dark>Dark</Button>
      <Button light>Light</Button>
    </React.Fragment>
  ))
  .add('Rounded', () => (
    <React.Fragment>
      <Button primary rounded>
        Primary
      </Button>
      <Button secondary rounded>
        Secondary
      </Button>
      <Button success rounded>
        Success
      </Button>
      <Button warning rounded>
        Warning
      </Button>
      <Button danger rounded>
        Danger
      </Button>
      <Button dark rounded>
        Dark
      </Button>
      <Button light rounded>
        Light
      </Button>
    </React.Fragment>
  ))
  .add('Outline', () => (
    <React.Fragment>
      <Button primary outline>
        Primary
      </Button>
      <Button secondary outline>
        Secondary
      </Button>
      <Button success outline>
        Success
      </Button>
      <Button warning outline>
        Warning
      </Button>
      <Button danger outline>
        Danger
      </Button>
      <Button dark outline>
        Dark
      </Button>
      <Button light outline>
        Light
      </Button>
    </React.Fragment>
  ))
  .add('Text', () => (
    <React.Fragment>
      <Button primary text>
        Primary
      </Button>
      <Button secondary text>
        Secondary
      </Button>
      <Button success text>
        Success
      </Button>
      <Button warning text>
        Warning
      </Button>
      <Button danger text>
        Danger
      </Button>
      <Button dark text>
        Dark
      </Button>
      <Button light text>
        Light
      </Button>
    </React.Fragment>
  ))
  .add('Full width', () => (
    <React.Fragment>
      <Button primary full>
        Primary
      </Button>
      <Button secondary full>
        Secondary
      </Button>
      <Button success full>
        Success
      </Button>
      <Button warning full>
        Warning
      </Button>
      <Button danger full>
        Danger
      </Button>
      <Button dark full>
        Dark
      </Button>
      <Button light full>
        Light
      </Button>
    </React.Fragment>
  ))
  .add('Disabled', () => (
    <React.Fragment>
      <Button primary disabled>
        Primary
      </Button>
      <Button secondary disabled>
        Secondary
      </Button>
      <Button success disabled>
        Success
      </Button>
      <Button warning disabled>
        Warning
      </Button>
      <Button danger disabled>
        Danger
      </Button>
      <Button dark disabled>
        Dark
      </Button>
      <Button light disabled>
        Light
      </Button>
    </React.Fragment>
  ));
