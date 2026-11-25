# Combobox

## Examples

### Disabled Multi-Select

`disabled` on the `Combobox:ChipsInput` stops the typing and the list. The chips already there are not locked by it.

```twig
<div class="mx-auto w-full max-w-xs" style="min-height: 280px">
    <twig:Combobox id="multi-disabled" name="frameworks" multiple :value="['Next.js', 'Astro']">
        <twig:Combobox:Chips>
            <twig:Combobox:ChipsInput placeholder="Add framework" disabled />
        </twig:Combobox:Chips>
        <twig:Combobox:Content>
            <twig:Combobox:Empty>
                No items found.
            </twig:Combobox:Empty>
            <twig:Combobox:List>
                <twig:Combobox:Item value="Next.js">
                    Next.js
                </twig:Combobox:Item>
                <twig:Combobox:Item value="SvelteKit">
                    SvelteKit
                </twig:Combobox:Item>
                <twig:Combobox:Item value="Nuxt.js">
                    Nuxt.js
                </twig:Combobox:Item>
                <twig:Combobox:Item value="Remix">
                    Remix
                </twig:Combobox:Item>
                <twig:Combobox:Item value="Astro">
                    Astro
                </twig:Combobox:Item>
            </twig:Combobox:List>
        </twig:Combobox:Content>
    </twig:Combobox>
</div>
```

### Invalid Multi-Select

`aria-invalid` on the `Combobox:ChipsInput` turns the border red around the chips.

```twig
<div class="mx-auto w-full max-w-xs" style="min-height: 280px">
    <twig:Combobox id="multi-invalid" name="frameworks" multiple :value="['Next.js', 'Astro']">
        <twig:Combobox:Chips>
            <twig:Combobox:ChipsInput placeholder="Add framework" aria-invalid="true" />
        </twig:Combobox:Chips>
        <twig:Combobox:Content>
            <twig:Combobox:Empty>
                No items found.
            </twig:Combobox:Empty>
            <twig:Combobox:List>
                <twig:Combobox:Item value="Next.js">
                    Next.js
                </twig:Combobox:Item>
                <twig:Combobox:Item value="SvelteKit">
                    SvelteKit
                </twig:Combobox:Item>
                <twig:Combobox:Item value="Nuxt.js">
                    Nuxt.js
                </twig:Combobox:Item>
                <twig:Combobox:Item value="Remix">
                    Remix
                </twig:Combobox:Item>
                <twig:Combobox:Item value="Astro">
                    Astro
                </twig:Combobox:Item>
            </twig:Combobox:List>
        </twig:Combobox:Content>
    </twig:Combobox>
</div>
```

### Country Picker

A combobox opened from a button, with a flag in each country. `label` is the text matched by the search, and the one shown in the button.

```twig
<div style="min-height: 380px">
    <div class="w-64">
        <twig:Combobox id="country-picker" value="France">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Select country" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search countries..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No countries found.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Argentina" label="Argentina">
                        <span aria-hidden="true">
                            🇦🇷
                        </span>
                        Argentina
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Australia" label="Australia">
                        <span aria-hidden="true">
                            🇦🇺
                        </span>
                        Australia
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Brazil" label="Brazil">
                        <span aria-hidden="true">
                            🇧🇷
                        </span>
                        Brazil
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Canada" label="Canada">
                        <span aria-hidden="true">
                            🇨🇦
                        </span>
                        Canada
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="China" label="China">
                        <span aria-hidden="true">
                            🇨🇳
                        </span>
                        China
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Egypt" label="Egypt">
                        <span aria-hidden="true">
                            🇪🇬
                        </span>
                        Egypt
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="France" label="France">
                        <span aria-hidden="true">
                            🇫🇷
                        </span>
                        France
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Germany" label="Germany">
                        <span aria-hidden="true">
                            🇩🇪
                        </span>
                        Germany
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="India" label="India">
                        <span aria-hidden="true">
                            🇮🇳
                        </span>
                        India
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Japan" label="Japan">
                        <span aria-hidden="true">
                            🇯🇵
                        </span>
                        Japan
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Kenya" label="Kenya">
                        <span aria-hidden="true">
                            🇰🇪
                        </span>
                        Kenya
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Mexico" label="Mexico">
                        <span aria-hidden="true">
                            🇲🇽
                        </span>
                        Mexico
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Spain" label="Spain">
                        <span aria-hidden="true">
                            🇪🇸
                        </span>
                        Spain
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="United States" label="United States">
                        <span aria-hidden="true">
                            🇺🇸
                        </span>
                        United States
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Custom Trigger Icon

The button is yours, so is its icon: here the up and down chevrons.

```twig
<div style="min-height: 340px">
    <div class="w-64">
        <twig:Combobox id="trigger-icon">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" size="sm" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Select a framework" />
                    <twig:ux:icon name="lucide:chevrons-up-down" class="text-muted-foreground" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search frameworks..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Next.js" label="Next.js">
                        Next.js
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="SvelteKit" label="SvelteKit">
                        SvelteKit
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Nuxt.js" label="Nuxt.js">
                        Nuxt.js
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Remix" label="Remix">
                        Remix
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Astro" label="Astro">
                        Astro
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Large List

500 items, filtered while typing. The loop only writes the example shorter.

```twig
{% set items = 1..500 %}
<div style="min-height: 340px">
    <div class="w-64">
        <twig:Combobox id="large-list">
            <twig:Combobox:Input placeholder="Search among 500 items" />
            <twig:Combobox:Content>
                <twig:Combobox:Empty>
                    No items found.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    {% for number in items %}
                        <twig:Combobox:Item value="item-{{ number }}" label="Item {{ number }}">
                            Item {{ number }}
                        </twig:Combobox:Item>
                    {% endfor %}
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Status Picker

Dots tell the statuses apart.

```twig
<div style="min-height: 340px">
    <div class="w-44">
        <twig:Combobox id="status-picker" :value="'Todo'">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" size="sm" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Status" />
                    <twig:ux:icon name="lucide:chevrons-up-down" class="text-muted-foreground" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Change status..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Backlog" label="Backlog">
                        <span class="size-2 rounded-full bg-zinc-400">
                        </span>
                        Backlog
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Todo" label="Todo">
                        <span class="size-2 rounded-full bg-sky-500">
                        </span>
                        Todo
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="In Progress" label="In Progress">
                        <span class="size-2 rounded-full bg-amber-500">
                        </span>
                        In Progress
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Done" label="Done">
                        <span class="size-2 rounded-full bg-emerald-500">
                        </span>
                        Done
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Canceled" label="Canceled">
                        <span class="size-2 rounded-full bg-red-500">
                        </span>
                        Canceled
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Priority Picker

An icon for each level.

```twig
<div style="min-height: 340px">
    <div class="w-44">
        <twig:Combobox id="priority-picker">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" size="sm" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Priority" />
                    <twig:ux:icon name="lucide:chevrons-up-down" class="text-muted-foreground" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Set priority..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="No priority" label="No priority">
                        <twig:ux:icon name="lucide:minus" />
                        No priority
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Urgent" label="Urgent">
                        <twig:ux:icon name="lucide:triangle-alert" />
                        Urgent
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="High" label="High">
                        <twig:ux:icon name="lucide:signal-high" />
                        High
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Medium" label="Medium">
                        <twig:ux:icon name="lucide:signal-medium" />
                        Medium
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Low" label="Low">
                        <twig:ux:icon name="lucide:signal-low" />
                        Low
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Assignee Picker

An avatar with the name of each person.

```twig
<div style="min-height: 340px">
    <div class="w-52">
        <twig:Combobox id="assignee-picker">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" size="sm" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Assignee" />
                    <twig:ux:icon name="lucide:chevrons-up-down" class="text-muted-foreground" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Assign to..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Amy Brooks" label="Amy Brooks">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Fallback>
                                AB
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        Amy Brooks
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Noah Carter" label="Noah Carter">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Fallback>
                                NC
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        Noah Carter
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Lina Moreau" label="Lina Moreau">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Fallback>
                                LM
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        Lina Moreau
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Sam Okafor" label="Sam Okafor">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Fallback>
                                SO
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        Sam Okafor
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Lead Picker

Same as the assignee, to pick the lead of a team.

```twig
<div style="min-height: 340px">
    <div class="w-52">
        <twig:Combobox id="lead-picker">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" size="sm" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Lead" />
                    <twig:ux:icon name="lucide:chevrons-up-down" class="text-muted-foreground" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Select lead..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Amy Brooks" label="Amy Brooks">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Fallback>
                                AB
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        Amy Brooks
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Noah Carter" label="Noah Carter">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Fallback>
                                NC
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        Noah Carter
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Lina Moreau" label="Lina Moreau">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Fallback>
                                LM
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        Lina Moreau
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Team Picker

Icons for the teams.

```twig
<div style="min-height: 340px">
    <div class="w-48">
        <twig:Combobox id="team-picker">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" size="sm" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Team" />
                    <twig:ux:icon name="lucide:chevrons-up-down" class="text-muted-foreground" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Move to team..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Engineering" label="Engineering">
                        <twig:ux:icon name="lucide:code" />
                        Engineering
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Design" label="Design">
                        <twig:ux:icon name="lucide:palette" />
                        Design
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Marketing" label="Marketing">
                        <twig:ux:icon name="lucide:megaphone" />
                        Marketing
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Support" label="Support">
                        <twig:ux:icon name="lucide:headset" />
                        Support
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Labels Picker

`multiple`: several labels can be checked, and the button lists them.

```twig
<div style="min-height: 340px">
    <div class="w-56">
        <twig:Combobox id="labels-picker" multiple :value="['Bug']">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" size="sm" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Labels" />
                    <twig:ux:icon name="lucide:chevrons-up-down" class="text-muted-foreground" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Add labels..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Bug" label="Bug">
                        <span class="size-2 rounded-full bg-red-500">
                        </span>
                        Bug
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Feature" label="Feature">
                        <span class="size-2 rounded-full bg-violet-500">
                        </span>
                        Feature
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Improvement" label="Improvement">
                        <span class="size-2 rounded-full bg-sky-500">
                        </span>
                        Improvement
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Documentation" label="Documentation">
                        <span class="size-2 rounded-full bg-emerald-500">
                        </span>
                        Documentation
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Members Picker

`multiple` again, with avatars.

```twig
<div style="min-height: 340px">
    <div class="w-56">
        <twig:Combobox id="members-picker" multiple :value="['Amy Brooks']">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" size="sm" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Members" />
                    <twig:ux:icon name="lucide:chevrons-up-down" class="text-muted-foreground" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Add members..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Amy Brooks" label="Amy Brooks">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Fallback>
                                AB
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        Amy Brooks
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Noah Carter" label="Noah Carter">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Fallback>
                                NC
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        Noah Carter
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Lina Moreau" label="Lina Moreau">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Fallback>
                                LM
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        Lina Moreau
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Sam Okafor" label="Sam Okafor">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Fallback>
                                SO
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        Sam Okafor
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Clear Button in a Popup

A second button next to the one that opens the list resets the selection. `Combobox:Clear` hides it while nothing is selected.

```twig
<div style="min-height: 340px">
    <div class="w-64">
        <twig:Combobox id="clear-popup" value="France">
            <twig:ButtonGroup>
                <twig:Combobox:Trigger>
                    <twig:Button variant="outline" class="flex-1 justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                        <twig:Combobox:Value placeholder="Select country" />
                        <twig:ux:icon name="lucide:chevrons-up-down" class="text-muted-foreground" />
                    </twig:Button>
                </twig:Combobox:Trigger>
                <twig:Combobox:Clear>
                    <twig:Button variant="outline" size="icon" {{ ...combobox_clear_attrs }}>
                        <twig:ux:icon name="lucide:x" />
                    </twig:Button>
                </twig:Combobox:Clear>
            </twig:ButtonGroup>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search" :showTrigger="false" />
                <twig:Combobox:Empty>
                    No countries found.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="France">
                        France
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Germany">
                        Germany
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Japan">
                        Japan
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Spain">
                        Spain
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Multiple Selection in a Popup

`multiple` on the root lets several items be checked in the list, and the button lists them.

```twig
<div style="min-height: 340px">
    <div class="w-64">
        <twig:Combobox id="multiple-popup" multiple :value="['Apple', 'Mango']">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Select fruits" />
                    <twig:ux:icon name="lucide:chevrons-up-down" class="text-muted-foreground" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search" :showTrigger="false" />
                <twig:Combobox:Empty>
                    No fruits found.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Apple">
                        Apple
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Banana">
                        Banana
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Cherry">
                        Cherry
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Mango">
                        Mango
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Invisible Tags

The chips sit in the field with no frame, no background and no focus ring, so the selection reads like a line of text. The classes go on `Combobox:Chips`.

```twig
<div style="min-height: 300px">
    <div class="w-full max-w-xs">
        <twig:Combobox id="invisible-tags" name="tags" multiple autoHighlight :value="['Design', 'Docs']">
            <twig:Combobox:Chips class="border-0! bg-transparent! px-0! focus-within:ring-0! dark:bg-transparent!">
                <twig:Combobox:ChipsInput placeholder="Add tag" />
            </twig:Combobox:Chips>
            <twig:Combobox:Content>
                <twig:Combobox:Empty>
                    No tags found.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Design">
                        Design
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Bug">
                        Bug
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Feature">
                        Feature
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Docs">
                        Docs
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Urgent">
                        Urgent
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Items With Metadata

Each item shows a second line. `label` stays the text matched while filtering.

```twig
<div style="min-height: 360px">
    <div class="w-64">
        <twig:Combobox id="cb-meta">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Select a person" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search people..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Ada Lovelace" label="Ada Lovelace">
                        <span class="flex flex-col">
                            <span>Ada Lovelace</span>
                            <span class="text-xs text-muted-foreground">Mathematician</span>
                        </span>
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Grace Hopper" label="Grace Hopper">
                        <span class="flex flex-col">
                            <span>Grace Hopper</span>
                            <span class="text-xs text-muted-foreground">Computer scientist</span>
                        </span>
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Alan Turing" label="Alan Turing">
                        <span class="flex flex-col">
                            <span>Alan Turing</span>
                            <span class="text-xs text-muted-foreground">Logician</span>
                        </span>
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Margaret Hamilton" label="Margaret Hamilton">
                        <span class="flex flex-col">
                            <span>Margaret Hamilton</span>
                            <span class="text-xs text-muted-foreground">Software engineer</span>
                        </span>
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Visible Checkboxes

A check box in each item mirrors its selected state (`data-selected`).

```twig
<div style="min-height: 360px">
    <div class="w-64">
        <twig:Combobox id="cb-boxes" multiple>
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Select teams" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search teams..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Design" label="Design" class="[&_[data-slot=combobox-item-indicator]]:hidden">
                        <span class="flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input group-data-[selected=true]/combobox-item:border-primary group-data-[selected=true]/combobox-item:bg-primary group-data-[selected=true]/combobox-item:text-primary-foreground" aria-hidden="true">
                            <twig:ux:icon name="lucide:check" class="size-3 opacity-0 group-data-[selected=true]/combobox-item:opacity-100" />
                        </span>
                        Design
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Engineering" label="Engineering" class="[&_[data-slot=combobox-item-indicator]]:hidden">
                        <span class="flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input group-data-[selected=true]/combobox-item:border-primary group-data-[selected=true]/combobox-item:bg-primary group-data-[selected=true]/combobox-item:text-primary-foreground" aria-hidden="true">
                            <twig:ux:icon name="lucide:check" class="size-3 opacity-0 group-data-[selected=true]/combobox-item:opacity-100" />
                        </span>
                        Engineering
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Marketing" label="Marketing" class="[&_[data-slot=combobox-item-indicator]]:hidden">
                        <span class="flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input group-data-[selected=true]/combobox-item:border-primary group-data-[selected=true]/combobox-item:bg-primary group-data-[selected=true]/combobox-item:text-primary-foreground" aria-hidden="true">
                            <twig:ux:icon name="lucide:check" class="size-3 opacity-0 group-data-[selected=true]/combobox-item:opacity-100" />
                        </span>
                        Marketing
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Sales" label="Sales" class="[&_[data-slot=combobox-item-indicator]]:hidden">
                        <span class="flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input group-data-[selected=true]/combobox-item:border-primary group-data-[selected=true]/combobox-item:bg-primary group-data-[selected=true]/combobox-item:text-primary-foreground" aria-hidden="true">
                            <twig:ux:icon name="lucide:check" class="size-3 opacity-0 group-data-[selected=true]/combobox-item:opacity-100" />
                        </span>
                        Sales
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Favorites and All

```twig
<div style="min-height: 360px">
    <div class="w-64">
        <twig:Combobox id="cb-fav">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Select a project" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search projects..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Group id="cb-fav-favorites">
                        <twig:Combobox:Label>
                            Favorites
                        </twig:Combobox:Label>
                        <twig:Combobox:Collection>
                            <twig:Combobox:Item value="Website" label="Website">
                                <twig:ux:icon name="lucide:star" class="text-amber-500" />
                                Website
                            </twig:Combobox:Item>
                            <twig:Combobox:Item value="Mobile app" label="Mobile app">
                                <twig:ux:icon name="lucide:star" class="text-amber-500" />
                                Mobile app
                            </twig:Combobox:Item>
                        </twig:Combobox:Collection>
                    </twig:Combobox:Group>
                    <twig:Combobox:Separator />
                    <twig:Combobox:Group id="cb-fav-others">
                        <twig:Combobox:Label>
                            All projects
                        </twig:Combobox:Label>
                        <twig:Combobox:Collection>
                            <twig:Combobox:Item value="Billing" label="Billing">
                                Billing
                            </twig:Combobox:Item>
                            <twig:Combobox:Item value="Docs" label="Docs">
                                Docs
                            </twig:Combobox:Item>
                            <twig:Combobox:Item value="Analytics" label="Analytics">
                                Analytics
                            </twig:Combobox:Item>
                        </twig:Combobox:Collection>
                    </twig:Combobox:Group>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Group Counts

```twig
<div style="min-height: 360px">
    <div class="w-64">
        <twig:Combobox id="cb-counts">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Select a country" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search countries..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Group id="cb-counts-eu">
                        <twig:Combobox:Label class="flex items-center justify-between">
                            Europe
                            <twig:Badge variant="secondary">
                                3
                            </twig:Badge>
                        </twig:Combobox:Label>
                        <twig:Combobox:Collection>
                            <twig:Combobox:Item value="France" label="France">
                                France
                            </twig:Combobox:Item>
                            <twig:Combobox:Item value="Germany" label="Germany">
                                Germany
                            </twig:Combobox:Item>
                            <twig:Combobox:Item value="Spain" label="Spain">
                                Spain
                            </twig:Combobox:Item>
                        </twig:Combobox:Collection>
                    </twig:Combobox:Group>
                    <twig:Combobox:Group id="cb-counts-as">
                        <twig:Combobox:Label class="flex items-center justify-between">
                            Asia
                            <twig:Badge variant="secondary">
                                2
                            </twig:Badge>
                        </twig:Combobox:Label>
                        <twig:Combobox:Collection>
                            <twig:Combobox:Item value="Japan" label="Japan">
                                Japan
                            </twig:Combobox:Item>
                            <twig:Combobox:Item value="India" label="India">
                                India
                            </twig:Combobox:Item>
                        </twig:Combobox:Collection>
                    </twig:Combobox:Group>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Nested Groups

```twig
<div style="min-height: 420px">
    <div class="w-64">
        <twig:Combobox id="cb-nested">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Select a city" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search cities..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Group id="cb-nested-eu">
                        <twig:Combobox:Label>
                            Europe
                        </twig:Combobox:Label>
                        <twig:Combobox:Collection>
                            <twig:Combobox:Group id="cb-nested-eu-fr">
                                <twig:Combobox:Label class="ps-4">
                                    France
                                </twig:Combobox:Label>
                                <twig:Combobox:Collection class="ps-4">
                                    <twig:Combobox:Item value="Paris" label="Paris">
                                        Paris
                                    </twig:Combobox:Item>
                                    <twig:Combobox:Item value="Lyon" label="Lyon">
                                        Lyon
                                    </twig:Combobox:Item>
                                </twig:Combobox:Collection>
                            </twig:Combobox:Group>
                            <twig:Combobox:Group id="cb-nested-eu-de">
                                <twig:Combobox:Label class="ps-4">
                                    Germany
                                </twig:Combobox:Label>
                                <twig:Combobox:Collection class="ps-4">
                                    <twig:Combobox:Item value="Berlin" label="Berlin">
                                        Berlin
                                    </twig:Combobox:Item>
                                    <twig:Combobox:Item value="Munich" label="Munich">
                                        Munich
                                    </twig:Combobox:Item>
                                </twig:Combobox:Collection>
                            </twig:Combobox:Group>
                        </twig:Combobox:Collection>
                    </twig:Combobox:Group>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Read Only

```twig
<div class="w-64">
    <twig:Combobox id="cb-readonly" value="France">
        <twig:Combobox:Input placeholder="Select a country" :showTrigger="false" readonly class="pointer-events-none" />
        <twig:Combobox:Content>
            <twig:Combobox:List>
                <twig:Combobox:Item value="France" label="France">
                    France
                </twig:Combobox:Item>
            </twig:Combobox:List>
        </twig:Combobox:Content>
    </twig:Combobox>
</div>
```

### Footer Actions

```twig
<div style="min-height: 360px">
    <div class="w-64">
        <twig:Combobox id="cb-footer">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Select a project" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search projects..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Website" label="Website">
                        Website
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Mobile app" label="Mobile app">
                        Mobile app
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Billing" label="Billing">
                        Billing
                    </twig:Combobox:Item>
                </twig:Combobox:List>
                <twig:Separator />
                <div class="flex gap-1 p-1">
                    <twig:Button variant="ghost" size="sm" class="flex-1 justify-start">
                        <twig:ux:icon name="lucide:plus" />
                        New project
                    </twig:Button>
                    <twig:Button variant="ghost" size="sm">
                        <twig:ux:icon name="lucide:settings" />
                        <span class="sr-only">
                            Manage projects
                        </span>
                    </twig:Button>
                </div>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Full Width

```twig
<div class="w-full max-w-xl" style="min-height: 240px">
    <twig:Combobox id="cb-full">
        <twig:Combobox:Input placeholder="Search a framework..." />
        <twig:Combobox:Content>
            <twig:Combobox:Empty>
                No results.
            </twig:Combobox:Empty>
            <twig:Combobox:List>
                <twig:Combobox:Item value="Symfony" label="Symfony">
                    Symfony
                </twig:Combobox:Item>
                <twig:Combobox:Item value="Laravel" label="Laravel">
                    Laravel
                </twig:Combobox:Item>
                <twig:Combobox:Item value="Rails" label="Rails">
                    Rails
                </twig:Combobox:Item>
            </twig:Combobox:List>
        </twig:Combobox:Content>
    </twig:Combobox>
</div>
```

### Shortcuts

```twig
<div style="min-height: 360px">
    <div class="w-64">
        <twig:Combobox id="cb-keys">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Choose an action" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search actions..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="New file" label="New file">
                        New file
                        <twig:Kbd class="ms-auto">
                            ⌘N
                        </twig:Kbd>
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Open file" label="Open file">
                        Open file
                        <twig:Kbd class="ms-auto">
                            ⌘O
                        </twig:Kbd>
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Save" label="Save">
                        Save
                        <twig:Kbd class="ms-auto">
                            ⌘S
                        </twig:Kbd>
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Close tab" label="Close tab">
                        Close tab
                        <twig:Kbd class="ms-auto">
                            ⌘W
                        </twig:Kbd>
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Validation Feedback

```twig
<div style="min-height: 280px">
    <twig:Field data-invalid="true" class="w-64">
        <twig:Field:Label for="cb-invalid-input">
            Country
        </twig:Field:Label>
        <twig:Combobox id="cb-invalid">
            <twig:Combobox:Input id="cb-invalid-input" placeholder="Select a country" aria-invalid="true" />
            <twig:Combobox:Content>
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="France" label="France">
                        France
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Germany" label="Germany">
                        Germany
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
        <twig:Field:Error>
            Select a country to continue.
        </twig:Field:Error>
    </twig:Field>
</div>
```

### Recent

```twig
<div style="min-height: 360px">
    <div class="w-64">
        <twig:Combobox id="cb-recent">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Open a file" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search files..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Group id="cb-recent-recent">
                        <twig:Combobox:Label>
                            Recent
                        </twig:Combobox:Label>
                        <twig:Combobox:Collection>
                            <twig:Combobox:Item value="report.pdf" label="report.pdf">
                                <twig:ux:icon name="lucide:history" class="text-muted-foreground" />
                                report.pdf
                            </twig:Combobox:Item>
                            <twig:Combobox:Item value="budget.xlsx" label="budget.xlsx">
                                <twig:ux:icon name="lucide:history" class="text-muted-foreground" />
                                budget.xlsx
                            </twig:Combobox:Item>
                        </twig:Combobox:Collection>
                    </twig:Combobox:Group>
                    <twig:Combobox:Separator />
                    <twig:Combobox:Group id="cb-recent-all">
                        <twig:Combobox:Label>
                            All files
                        </twig:Combobox:Label>
                        <twig:Combobox:Collection>
                            <twig:Combobox:Item value="notes.md" label="notes.md">
                                notes.md
                            </twig:Combobox:Item>
                            <twig:Combobox:Item value="plan.docx" label="plan.docx">
                                plan.docx
                            </twig:Combobox:Item>
                            <twig:Combobox:Item value="logo.svg" label="logo.svg">
                                logo.svg
                            </twig:Combobox:Item>
                        </twig:Combobox:Collection>
                    </twig:Combobox:Group>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Category Separators

```twig
<div style="min-height: 360px">
    <div class="w-64">
        <twig:Combobox id="cb-cat">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Select food" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search food..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Group id="cb-cat-fruit">
                        <twig:Combobox:Label>
                            Fruits
                        </twig:Combobox:Label>
                        <twig:Combobox:Collection>
                            <twig:Combobox:Item value="Apple" label="Apple">
                                Apple
                            </twig:Combobox:Item>
                            <twig:Combobox:Item value="Banana" label="Banana">
                                Banana
                            </twig:Combobox:Item>
                        </twig:Combobox:Collection>
                    </twig:Combobox:Group>
                    <twig:Combobox:Separator />
                    <twig:Combobox:Group id="cb-cat-veg">
                        <twig:Combobox:Label>
                            Vegetables
                        </twig:Combobox:Label>
                        <twig:Combobox:Collection>
                            <twig:Combobox:Item value="Carrot" label="Carrot">
                                Carrot
                            </twig:Combobox:Item>
                            <twig:Combobox:Item value="Leek" label="Leek">
                                Leek
                            </twig:Combobox:Item>
                        </twig:Combobox:Collection>
                    </twig:Combobox:Group>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Sizes

```twig
<div style="min-height: 240px" class="grid max-w-xs content-start gap-4">
    <twig:Combobox id="cb-size-sm">
        <twig:Combobox:Input placeholder="Small" class="h-7 text-xs" />
        <twig:Combobox:Content>
            <twig:Combobox:List>
                <twig:Combobox:Item value="Apple" label="Apple">
                    Apple
                </twig:Combobox:Item>
                <twig:Combobox:Item value="Banana" label="Banana">
                    Banana
                </twig:Combobox:Item>
            </twig:Combobox:List>
        </twig:Combobox:Content>
    </twig:Combobox>
    <twig:Combobox id="cb-size-lg">
        <twig:Combobox:Input placeholder="Large" class="h-10 text-base" />
        <twig:Combobox:Content>
            <twig:Combobox:List>
                <twig:Combobox:Item value="Apple" label="Apple">
                    Apple
                </twig:Combobox:Item>
                <twig:Combobox:Item value="Banana" label="Banana">
                    Banana
                </twig:Combobox:Item>
            </twig:Combobox:List>
        </twig:Combobox:Content>
    </twig:Combobox>
</div>
```

### Colored Items

```twig
<div style="min-height: 300px">
    <div class="w-64">
        <twig:Combobox id="cb-colored">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Select a level" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search levels..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Critical" label="Critical">
                        <span class="font-medium text-red-600">Critical</span>
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Warning" label="Warning">
                        <span class="font-medium text-amber-600">Warning</span>
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Healthy" label="Healthy">
                        <span class="font-medium text-emerald-600">Healthy</span>
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Disabled Items

```twig
<div style="min-height: 300px">
    <div class="w-64">
        <twig:Combobox id="cb-disabled">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Select a fruit" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search fruits..." :showTrigger="false" />
                <twig:Combobox:Empty>
                    No results.
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Apple" label="Apple">
                        Apple
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Banana" label="Banana" disabled>
                        Banana
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Cherry" label="Cherry">
                        Cherry
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Error With Retry

The list is replaced by an error state with a retry button (wire the button to your own request).

```twig
<div style="min-height: 320px">
    <div class="w-64">
        <twig:Combobox id="cb-retry">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Select a project" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search projects..." :showTrigger="false" />
                <twig:Empty class="gap-2 p-4">
                    <twig:Empty:Header>
                        <twig:Empty:Title class="text-sm">
                            Projects could not be loaded
                        </twig:Empty:Title>
                        <twig:Empty:Description>
                            Check your connection and try again.
                        </twig:Empty:Description>
                    </twig:Empty:Header>
                    <twig:Button variant="outline" size="sm">
                        <twig:ux:icon name="lucide:refresh-cw" />
                        Try again
                    </twig:Button>
                </twig:Empty>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Loading State

```twig
<div style="min-height: 320px">
    <div class="w-64">
        <twig:Combobox id="cb-loading">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Select a project" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search projects..." :showTrigger="false" />
                <div class="grid gap-2 p-2" aria-busy="true">
                    <twig:Skeleton class="h-6 w-full" />
                    <twig:Skeleton class="h-6 w-4/5" />
                    <twig:Skeleton class="h-6 w-3/5" />
                </div>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```

### Empty With Action

Type a name that matches nothing: the empty state offers an action.

```twig
<div style="min-height: 320px">
    <div class="w-64">
        <twig:Combobox id="cb-empty-action">
            <twig:Combobox:Trigger>
                <twig:Button variant="outline" class="w-full justify-between font-normal" {{ ...combobox_trigger_attrs }}>
                    <twig:Combobox:Value placeholder="Select a label" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:Combobox:Trigger>
            <twig:Combobox:Content>
                <twig:Combobox:Input placeholder="Search labels..." :showTrigger="false" />
                <twig:Combobox:Empty class="flex-col items-center gap-2 py-3">
                    No label found.
                    <twig:Button variant="outline" size="sm">
                        <twig:ux:icon name="lucide:plus" />
                        Create label
                    </twig:Button>
                </twig:Combobox:Empty>
                <twig:Combobox:List>
                    <twig:Combobox:Item value="Bug" label="Bug">
                        Bug
                    </twig:Combobox:Item>
                    <twig:Combobox:Item value="Feature" label="Feature">
                        Feature
                    </twig:Combobox:Item>
                </twig:Combobox:List>
            </twig:Combobox:Content>
        </twig:Combobox>
    </div>
</div>
```
