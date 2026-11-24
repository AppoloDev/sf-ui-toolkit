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
