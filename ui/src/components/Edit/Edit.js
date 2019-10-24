import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleGroupIcon = () => (
  <div>
    <Button.Group>
    <Button icon>
        <Icon name='undo' />
      </Button>
      <Button icon>
        <Icon name='redo alternate' />
      </Button>
      <Button icon>
        <Icon name='align left' />
      </Button>
      <Button icon>
        <Icon name='align center' />
      </Button>
      <Button icon>
        <Icon name='align right' />
      </Button>
      <Button icon>
        <Icon name='align justify' />
      </Button>
    </Button.Group>{' '}
    <Button.Group>
      <Button icon>
        <Icon name='bold' />
      </Button>
      <Button icon>
        <Icon name='underline' />
      </Button>
      <Button icon>
        <Icon name='text width' />
      </Button>
      <Button icon>
        <Icon name='linkify' />
      </Button>
      <Button icon>
        <Icon name='quote left' />
      </Button>
      <Button icon>
        <Icon name='image' />
      </Button>
      <Button icon>
        <Icon name='folder open outline' />
      </Button>
      <Button icon>
        <Icon name='folder' />
      </Button>
    </Button.Group>
  </div>
)

export default ButtonExampleGroupIcon