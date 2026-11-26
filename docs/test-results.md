# Test Results

> A test run summary: passed, failed and skipped counts with a segmented bar, the duration, and suites that open to show each test with its status, time and failure message. Twig and native details, no JavaScript.

## Usage

```twig
<twig:TestResults title="Unit tests" duration="1.8 s" :suites="[
    {name: 'OrderTest', tests: [
        {name: 'creates an order', status: 'passed', duration: '12 ms'},
        {name: 'applies a coupon', status: 'failed', message: 'Expected 85, got 90.'}
    ]}
]" />
```

`status` is `passed`, `failed` or `skipped`.

## Examples

### Basic

Counts, a segmented bar, and suites. Suites with a failure open by themselves.

<!-- height: 340 -->

```twig
<twig:TestResults title="Unit tests" duration="1.8 s" :suites="[{name: 'OrderTest', tests: [{name: 'creates an order', status: 'passed', duration: '12 ms'}, {name: 'rejects an empty cart', status: 'passed', duration: '8 ms'}, {name: 'applies a coupon', status: 'failed', duration: '31 ms', message: 'Failed asserting that 90 matches expected 85.'}]}, {name: 'UserTest', tests: [{name: 'registers a user', status: 'passed', duration: '20 ms'}, {name: 'sends the welcome mail', status: 'skipped'}]}]" />
```

### All Passed

No failure: the suites stay closed.

<!-- height: 240 -->

```twig
<twig:TestResults title="Smoke tests" duration="0.4 s" :suites="[{name: 'HomeTest', tests: [{name: 'shows the home page', status: 'passed', duration: '5 ms'}, {name: 'shows the footer', status: 'passed', duration: '3 ms'}]}]" />
```

### Closed

`openFailed` off keeps every suite closed.

<!-- height: 280 -->

```twig
<twig:TestResults :openFailed="false" :suites="[{name: 'OrderTest', tests: [{name: 'creates an order', status: 'passed', duration: '12 ms'}, {name: 'rejects an empty cart', status: 'passed', duration: '8 ms'}, {name: 'applies a coupon', status: 'failed', duration: '31 ms', message: 'Failed asserting that 90 matches expected 85.'}]}, {name: 'UserTest', tests: [{name: 'registers a user', status: 'passed', duration: '20 ms'}, {name: 'sends the welcome mail', status: 'skipped'}]}]" />
```

### Empty

Without suites, only zeros.

<!-- height: 140 -->

```twig
<twig:TestResults title="No tests yet" :suites="[]" />
```

### Another Language

All texts are props.

<!-- height: 340 -->

```twig
<twig:TestResults title="Tests unitaires" duration="1,8 s" durationLabel="Durée" passedLabel="réussis" failedLabel="échoués" skippedLabel="ignorés" label="Résultats des tests" :suites="[{name: 'OrderTest', tests: [{name: 'creates an order', status: 'passed', duration: '12 ms'}, {name: 'rejects an empty cart', status: 'passed', duration: '8 ms'}, {name: 'applies a coupon', status: 'failed', duration: '31 ms', message: 'Failed asserting that 90 matches expected 85.'}]}, {name: 'UserTest', tests: [{name: 'registers a user', status: 'passed', duration: '20 ms'}, {name: 'sends the welcome mail', status: 'skipped'}]}]" />
```

## Accessibility

- The counts are text, the bar is an image with a text alternative, and every test icon has its status as a label, so nothing relies on color alone.
- Suites are native `details` elements, keyboard friendly.

## API

### `<twig:TestResults>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `suites` | array | `[]` | The suites: `name` and `tests` (`name`, `status`, `duration`, `message`). |
| `title` | string or null | `null` | The title of the run. |
| `duration` | string or null | `null` | The total duration, already formatted. |
| `passedLabel` | string | `passed` | The text for passed tests. |
| `failedLabel` | string | `failed` | The text for failed tests. |
| `skippedLabel` | string | `skipped` | The text for skipped tests. |
| `durationLabel` | string | `Duration` | The label before the duration. |
| `openFailed` | bool | `true` | Open the suites that contain a failure. |
| `label` | string | `Test results` | The accessible name. |

| Block | Description |
| --- | --- |
| `default` | Not used. |
