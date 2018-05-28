# <FloatingHelper/>
This is a Popover helper component

### Open/Close behavior
The default behavior is that the popover is initially opened.
Once close by clicking on close button, it goes to "Hover" mode. (Opens on mouseEnter and closes on mouseLeave).

### Programatic Open/Close
The popover can be initially closed, in which case it starts in "Hover" mode.
It can be later programatically opened, and thus goes into "One-Time-Click-To-Close" mode. Again, once closed, it will go to "Hover" mode, as explained above.
See "Programatic Open Example".

### Known Issues
There is a CSS bug which happens when there is more than one FloatingHelper in a page, which are attached to the window. See [this issue](https://github.com/wix/wix-ui/issues/523)

### Playground & Preview
The playground's live Code section is not working well for this component. Please refer to the Examples section, and click "Show code" to see code examples.
