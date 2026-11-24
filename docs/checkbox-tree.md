# Checkbox Tree

> Checkboxes arranged in a tree: a parent checkbox checks and unchecks its children, and shows a mixed state when only some of them are checked.

## Installation

- checkbox
- label

## Usage

Each level is a `CheckboxTree:Node` with its checkbox in the first row. The nodes under it go in a `CheckboxTree:Children`. The parent follows its children (checked when all are, mixed when some are, empty when none is), and checking the parent checks all of them. A tree that starts with some boxes checked shows the right parents.

```twig
<twig:CheckboxTree>
    <twig:CheckboxTree:Node>
        <div class="flex items-center gap-2">
            <twig:Checkbox id="use-all" name="use-all" />
            <twig:Label for="use-all" class="text-sm font-normal">
                All
            </twig:Label>
        </div>
        <twig:CheckboxTree:Children>
            <twig:CheckboxTree:Node>
                <div class="flex items-center gap-2">
                    <twig:Checkbox id="use-a" name="use-a" checked />
                    <twig:Label for="use-a" class="text-sm font-normal">
                        A
                    </twig:Label>
                </div>
            </twig:CheckboxTree:Node>
            <twig:CheckboxTree:Node>
                <div class="flex items-center gap-2">
                    <twig:Checkbox id="use-b" name="use-b" />
                    <twig:Label for="use-b" class="text-sm font-normal">
                        B
                    </twig:Label>
                </div>
            </twig:CheckboxTree:Node>
        </twig:CheckboxTree:Children>
    </twig:CheckboxTree:Node>
</twig:CheckboxTree>
```

## Examples

### Indeterminate

One parent and its children. The parent is mixed while only some of them are checked.

```twig
<twig:CheckboxTree class="mx-auto w-full max-w-xs">
    <twig:CheckboxTree:Node>
        <div class="flex items-center gap-2">
            <twig:Checkbox id="notif-all" name="notif-all" />
            <twig:Label for="notif-all" class="text-sm font-normal">
                Notifications
            </twig:Label>
        </div>
        <twig:CheckboxTree:Children>
            <twig:CheckboxTree:Node>
                <div class="flex items-center gap-2">
                    <twig:Checkbox id="notif-email" name="notif-email" checked />
                    <twig:Label for="notif-email" class="text-sm font-normal">
                        Email
                    </twig:Label>
                </div>
            </twig:CheckboxTree:Node>
            <twig:CheckboxTree:Node>
                <div class="flex items-center gap-2">
                    <twig:Checkbox id="notif-push" name="notif-push" />
                    <twig:Label for="notif-push" class="text-sm font-normal">
                        Push
                    </twig:Label>
                </div>
            </twig:CheckboxTree:Node>
            <twig:CheckboxTree:Node>
                <div class="flex items-center gap-2">
                    <twig:Checkbox id="notif-sms" name="notif-sms" />
                    <twig:Label for="notif-sms" class="text-sm font-normal">
                        SMS
                    </twig:Label>
                </div>
            </twig:CheckboxTree:Node>
        </twig:CheckboxTree:Children>
    </twig:CheckboxTree:Node>
</twig:CheckboxTree>
```

### Nested Permissions

The nodes can be nested as deep as needed: a group is mixed when part of its permissions are granted, and the top one when part of the groups are.

```twig
<twig:CheckboxTree class="mx-auto w-full max-w-xs">
    <twig:CheckboxTree:Node>
        <div class="flex items-center gap-2">
            <twig:Checkbox id="perm-all" name="perm-all" />
            <twig:Label for="perm-all" class="text-sm font-normal">
                All permissions
            </twig:Label>
        </div>
        <twig:CheckboxTree:Children>
            <twig:CheckboxTree:Node>
                <div class="flex items-center gap-2">
                    <twig:Checkbox id="perm-users" name="perm-users" />
                    <twig:Label for="perm-users" class="text-sm font-normal">
                        Users
                    </twig:Label>
                </div>
                <twig:CheckboxTree:Children>
                    <twig:CheckboxTree:Node>
                        <div class="flex items-center gap-2">
                            <twig:Checkbox id="perm-users-view" name="perm-users-view" checked />
                            <twig:Label for="perm-users-view" class="text-sm font-normal">
                                View
                            </twig:Label>
                        </div>
                    </twig:CheckboxTree:Node>
                    <twig:CheckboxTree:Node>
                        <div class="flex items-center gap-2">
                            <twig:Checkbox id="perm-users-create" name="perm-users-create" checked />
                            <twig:Label for="perm-users-create" class="text-sm font-normal">
                                Create
                            </twig:Label>
                        </div>
                    </twig:CheckboxTree:Node>
                    <twig:CheckboxTree:Node>
                        <div class="flex items-center gap-2">
                            <twig:Checkbox id="perm-users-delete" name="perm-users-delete" />
                            <twig:Label for="perm-users-delete" class="text-sm font-normal">
                                Delete
                            </twig:Label>
                        </div>
                    </twig:CheckboxTree:Node>
                </twig:CheckboxTree:Children>
            </twig:CheckboxTree:Node>
            <twig:CheckboxTree:Node>
                <div class="flex items-center gap-2">
                    <twig:Checkbox id="perm-content" name="perm-content" />
                    <twig:Label for="perm-content" class="text-sm font-normal">
                        Content
                    </twig:Label>
                </div>
                <twig:CheckboxTree:Children>
                    <twig:CheckboxTree:Node>
                        <div class="flex items-center gap-2">
                            <twig:Checkbox id="perm-content-view" name="perm-content-view" checked />
                            <twig:Label for="perm-content-view" class="text-sm font-normal">
                                View
                            </twig:Label>
                        </div>
                    </twig:CheckboxTree:Node>
                    <twig:CheckboxTree:Node>
                        <div class="flex items-center gap-2">
                            <twig:Checkbox id="perm-content-edit" name="perm-content-edit" checked />
                            <twig:Label for="perm-content-edit" class="text-sm font-normal">
                                Edit
                            </twig:Label>
                        </div>
                    </twig:CheckboxTree:Node>
                    <twig:CheckboxTree:Node>
                        <div class="flex items-center gap-2">
                            <twig:Checkbox id="perm-content-publish" name="perm-content-publish" checked />
                            <twig:Label for="perm-content-publish" class="text-sm font-normal">
                                Publish
                            </twig:Label>
                        </div>
                    </twig:CheckboxTree:Node>
                </twig:CheckboxTree:Children>
            </twig:CheckboxTree:Node>
            <twig:CheckboxTree:Node>
                <div class="flex items-center gap-2">
                    <twig:Checkbox id="perm-billing" name="perm-billing" />
                    <twig:Label for="perm-billing" class="text-sm font-normal">
                        Billing
                    </twig:Label>
                </div>
                <twig:CheckboxTree:Children>
                    <twig:CheckboxTree:Node>
                        <div class="flex items-center gap-2">
                            <twig:Checkbox id="perm-billing-view" name="perm-billing-view" />
                            <twig:Label for="perm-billing-view" class="text-sm font-normal">
                                View
                            </twig:Label>
                        </div>
                    </twig:CheckboxTree:Node>
                    <twig:CheckboxTree:Node>
                        <div class="flex items-center gap-2">
                            <twig:Checkbox id="perm-billing-manage" name="perm-billing-manage" />
                            <twig:Label for="perm-billing-manage" class="text-sm font-normal">
                                Manage
                            </twig:Label>
                        </div>
                    </twig:CheckboxTree:Node>
                </twig:CheckboxTree:Children>
            </twig:CheckboxTree:Node>
        </twig:CheckboxTree:Children>
    </twig:CheckboxTree:Node>
</twig:CheckboxTree>
```

### With a Tree

With the `Tree` of this kit, `checkbox` puts a checkbox in the row of each node: branches open and close, the keyboard navigation of the tree is kept (`Space` checks the box), and `CheckboxTree` keeps the boxes consistent. Install the `tree` recipe of this kit too.

```twig
<twig:CheckboxTree>
    <twig:Tree label="Files to back up" class="w-72">
        <twig:Tree:Item label="Documents" name="folders[]" value="documents" :checkbox="true" :expanded="true">
            <twig:Tree:Item label="Invoices" name="folders[]" value="invoices" :checkbox="true" :expanded="true">
                <twig:Tree:Item label="2024" name="folders[]" value="invoices-2024" :checkbox="true" :checked="true" />
                <twig:Tree:Item label="2025" name="folders[]" value="invoices-2025" :checkbox="true" :checked="true" />
            </twig:Tree:Item>
            <twig:Tree:Item label="Contracts" name="folders[]" value="contracts" :checkbox="true" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Photos" name="folders[]" value="photos" :checkbox="true" :expanded="true">
            <twig:Tree:Item label="Holidays" name="folders[]" value="holidays" :checkbox="true" />
            <twig:Tree:Item label="Family" name="folders[]" value="family" :checkbox="true" />
        </twig:Tree:Item>
    </twig:Tree>
</twig:CheckboxTree>
```

## Accessibility

- The mixed state is the native `indeterminate` state of the checkbox: browsers and screen readers expose it as « partially checked ». It is drawn as a dash.
- The tree has no special role: it is plain checkboxes, in the order of the page. Each child group is a `role="group"`; give it a name with `aria-labelledby` pointing to the label of its parent when the context is not obvious.
- The parent checkbox is a real field: it is submitted with the form like the others, so ignore it on the server if only the leaves matter.
- Disabled checkboxes are not changed when a parent is checked.

## API

### `<twig:CheckboxTree>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| any attribute | | | Passed to the root element: `class`, `id`, `data-*`. |

| Block | Description |
| --- | --- |
| `default` | The top `CheckboxTree:Node` components. |

### `<twig:CheckboxTree:Node>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| any attribute | | | Passed to the element of the node. |

| Block | Description |
| --- | --- |
| `default` | The row of the node, whose first checkbox is the one of the node, then an optional `CheckboxTree:Children`. |

### `<twig:CheckboxTree:Children>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| any attribute | | | Passed to the group element, which has `role="group"`. |

| Block | Description |
| --- | --- |
| `default` | The `CheckboxTree:Node` components under the parent. |
