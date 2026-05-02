---
title: Example Reference
description: A reference page in my new Starlight docs site.
---

Reference pages are ideal for outlining how things work in terse and clear terms.
Less concerned with telling a story or addressing a specific use case, they should give a comprehensive outline of what you're documenting.

```typescript
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'My delightful docs site',
    }),
  ],
});
```

```html
<tr
    id={`row-${props.vm.id}-details`}
    style="cursor: pointer"
    hx-trigger="click"
    hx-target="this"
    hx-swap="outerHTML"
    hx-get={OOBHonoWebApiConsts.BASE + editUrl(props.vm.id)}
>
    <td colSpan={5} style="padding-left: 30px">

            <div class="card p-5 my-2 mx-0">
                <div class="mb-1"><strong>Street:</strong> {props.vm.streetName} {props.vm.streetNo}</div>
                <div class="mb-1"><strong>City:</strong> {props.vm.zipCode} {props.vm.city}</div>
                <div class="mb-1"><strong>Mailbox:</strong> {props.vm.mailBox}</div>
                <div class="mb-1"><strong>Phone:</strong> {props.vm.phoneNumber}</div>
                <div class="mb-3"><strong>Cellphone:</strong> {props.vm.cellPhone}</div>
            </div>
    </td>
</tr>
```

```tsx
import {PersonDetailModel} from "./oob-person-page-model-vm";//
import {OOBHonoWebApiConsts} from "./oob-hono-web-api-shared-consts";
import {editUrl} from "../p00shared/route-builder";

export const OOBPersondetailsCard = (props: { vm: PersonDetailModel }) => (
<>
<tr
    id={`row-${props.vm.id}-details`}
    style="cursor: pointer"
    hx-trigger="click"
    hx-target="this"
    hx-swap="outerHTML"
    hx-get={OOBHonoWebApiConsts.BASE + editUrl(props.vm.id)}
>
    <td colSpan={5} style="padding-left: 30px">
            <div class="card p-5 my-2 mx-0">
                <div class="mb-1"><strong>Street:</strong> {props.vm.streetName} {props.vm.streetNo}</div>
                <div class="mb-1"><strong>City:</strong> {props.vm.zipCode} {props.vm.city}</div>
                <div class="mb-1"><strong>Mailbox:</strong> {props.vm.mailBox}</div>
                <div class="mb-1"><strong>Phone:</strong> {props.vm.phoneNumber}</div>
                <div class="mb-3"><strong>Cellphone:</strong> {props.vm.cellPhone}</div>
            </div>
    </td>
</tr>
</>
);
```




```java
	// Java:
	@GetMapping(HonoWebApiConsts.PERSON_TABLE)
	public ResponseEntity<String> peopleUrl(@RequestParam() String search, HttpServletRequest request) {
		PersonTableModel vm = peopleService.peopleForSearch(search);
		return honoAppClient.post(request.getRequestURI(), vm);
	}

```

## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
