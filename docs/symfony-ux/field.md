# Field

## Examples

### Slider

```twig
<twig:Field class="w-full max-w-xs">
    <twig:Field:Title>Price Range</twig:Field:Title>
    <twig:Field:Description>Set your budget range ($200 - $800).</twig:Field:Description>
    <twig:Slider name="price" min="0" max="1000" step="10" value="200,800" class="mt-2 w-full" aria-label="Price Range" />
</twig:Field>
```

### Radio

```twig
<twig:Field:Set class="w-full max-w-xs">
    <twig:Field:Legend variant="label">Subscription Plan</twig:Field:Legend>
    <twig:Field:Description>Yearly and lifetime plans offer significant savings.</twig:Field:Description>
    <twig:RadioGroup>
        <twig:Field orientation="horizontal">
            <twig:RadioGroup:Item id="plan-monthly" name="plan" value="monthly" checked />
            <twig:Field:Label for="plan-monthly" class="font-normal">Monthly ($9.99/month)</twig:Field:Label>
        </twig:Field>
        <twig:Field orientation="horizontal">
            <twig:RadioGroup:Item id="plan-yearly" name="plan" value="yearly" />
            <twig:Field:Label for="plan-yearly" class="font-normal">Yearly ($99.99/year)</twig:Field:Label>
        </twig:Field>
        <twig:Field orientation="horizontal">
            <twig:RadioGroup:Item id="plan-lifetime" name="plan" value="lifetime" />
            <twig:Field:Label for="plan-lifetime" class="font-normal">Lifetime ($299.99)</twig:Field:Label>
        </twig:Field>
    </twig:RadioGroup>
</twig:Field:Set>
```

### Responsive Layout

Set `orientation="responsive"` for automatic column layouts inside container-aware parents.

```twig
<div class="w-full max-w-lg">
    <form>
        <twig:Field:Set>
            <twig:Field:Legend>Profile</twig:Field:Legend>
            <twig:Field:Description>Fill in your profile information.</twig:Field:Description>
            <twig:Field:Group>
                <twig:Field orientation="responsive">
                    <twig:Field:Content>
                        <twig:Field:Label for="responsive-name">Name</twig:Field:Label>
                        <twig:Field:Description>Provide your full name for identification</twig:Field:Description>
                    </twig:Field:Content>
                    <twig:Input id="responsive-name" placeholder="Evil Rabbit" required />
                </twig:Field>
                <twig:Field orientation="responsive">
                    <twig:Button type="submit">Submit</twig:Button>
                    <twig:Button type="button" variant="outline">Cancel</twig:Button>
                </twig:Field>
            </twig:Field:Group>
        </twig:Field:Set>
    </form>
</div>
```
