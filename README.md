![Logo]

> A library of reusable React components that we are using at Par Mais.
  
## Available components

||||
|:----------:|:----------:|:----------:|
|[avatar]|[badge]|[button]|
|[card]|[checkbox]|[cnpjInput]|
|[cpfInput]|[currencyInput]|[dateInput]|
|[dateSelector]|[elidedTextBox]|[form]|
|[header]|[icons]|[label]|
|[maskedInput]|[radio]|[radioGroup]|
|[requestButton]|[searchBar]|[select]|
|[textField]|[switcher]|[textArea]|


## Using the components

1. From the command line inside of your project

        npm install --save par-ui

2. Import the component that you want to use

  ```js
  // es6
  import { requestButton } from 'par-ui'
  ```


3. Use as if it was any other component

  ```
  render () {
    return (
      &lt;requestButton/&gt;
    )
  }
   ```

## Build
1. From the command line inside of your project

        npm run prod:build

## ESlint

win

```
$ npm install -g install-peerdeps

$ install-peerdeps --dev eslint-config-airbnb
```

linux/osx

```
npm info eslint-config-airbnb@latest peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev eslint-config-airbnb@latest
```

## Contributing
The [Par Mais Tecnologia][ParMaisTech] encourages participation. If you feel you can help in any way, be
it with bug reporting, documentation, examples, extra testing, or new features feel free
to [create an issue][Issue], or better yet, [submit a [Pull Request][Pull]. For more
information on contribution please see our [Contributing][Contrib] guide.

## License
Copyright (c) 2018 Par 6 Tecnologia LTDA.  
Licensed under __[Apache 2.0][Lic]__.

[Lic]: ./LICENSE
[Logo]: ./logo.png
[Sponsor]: http://parmais.com.br
[ParMaisTech]: http://parmais.com.br
[Contrib]: ./CONTRIBUTE
[Issue]: https://github.com/par-mais-tecnologia/dynamito/issues/new
[Pull]: https://github.com/par-mais-tecnologia/dynamito/pulls

[avatar]: ./src/avatar
[badge]: ./src/badge
[button]: ./src/button
[card]: ./src/card
[checkbox]: ./src/checkbox
[cnpjInput]: ./src/cnpjInput
[cpfInput]: ./src/cpfInput
[currencyInput]: ./src/currencyInput
[dateInput]: ./src/dateInput
[dateSelector]: ./src/dateSelector
[elidedTextBox]: ./src/elidedTextBox
[form]: ./src/form
[header]: ./src/header
[icons]: ./src/icons
[label]: ./src/label
[maskedInput]: ./src/maskedInput
[radio]: ./src/radio
[radioGroup]: ./src/radioGroup
[requestButton]: ./src/requestButton
[searchBar]: ./src/searchBar
[select]: ./src/select
[style]: ./src/style
[switcher]: ./src/switcher
[textArea]: ./src/textArea
[textField]: ./src/textField
