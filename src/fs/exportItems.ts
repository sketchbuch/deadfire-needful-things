import * as fs from 'fs'
import path from 'path'
import { bundles } from '../bundles/bundles'
import { capitalise } from '../utils/capitalise'

bundles.forEach(({ data, type }) => {
  const items = data.map(({ label, url }) => `[${label}](${url})`)
  const bbItems = data.map(({ label, url }) => `[*] [url=${url}]${label}[/url]`)
  const content = `${capitalise(type)}
===

${items.sort().join('\n')}

As list:

* ${items.sort().join('\n* ')}

As BBCode Links:

[list]
${bbItems.sort().join('\n')}
[/list]
`

  const filePath = path.join('build', `list_${type}.txt`)
  fs.writeFileSync(filePath, content)
})
