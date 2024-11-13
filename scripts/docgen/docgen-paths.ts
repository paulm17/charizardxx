import { getPath, getPaths } from '../utils/get-path';
import { getDeclarationsPaths } from './get-declarations-paths';

const FILES_PATHS = getPaths([
  // Input
  'packages/@charizardxx/core/src/components/Input/InputLabel/InputLabel.tsx',
  'packages/@charizardxx/core/src/components/Input/InputWrapper/InputWrapper.tsx',
  'packages/@charizardxx/core/src/components/Input/InputDescription/InputDescription.tsx',
  'packages/@charizardxx/core/src/components/Input/InputError/InputError.tsx',

  // Button
  'packages/@charizardxx/core/src/components/Button/ButtonGroup/ButtonGroup.tsx',

  // ActionIcon
  'packages/@charizardxx/core/src/components/ActionIcon/ActionIconGroup/ActionIconGroup.tsx',

  // Popover
  'packages/@charizardxx/core/src/components/Popover/PopoverTarget/PopoverTarget.tsx',
  'packages/@charizardxx/core/src/components/Popover/PopoverDropdown/PopoverDropdown.tsx',

  // Slider
  'packages/@charizardxx/core/src/components/Slider/Slider/Slider.tsx',
  'packages/@charizardxx/core/src/components/Slider/RangeSlider/RangeSlider.tsx',

  // Switch
  'packages/@charizardxx/core/src/components/Switch/SwitchGroup/SwitchGroup.tsx',

  // Checkbox
  'packages/@charizardxx/core/src/components/Checkbox/CheckboxGroup/CheckboxGroup.tsx',
  'packages/@charizardxx/core/src/components/Checkbox/CheckboxIndicator/CheckboxIndicator.tsx',
  'packages/@charizardxx/core/src/components/Checkbox/CheckboxCard/CheckboxCard.tsx',

  // Radio
  'packages/@charizardxx/core/src/components/Radio/RadioGroup/RadioGroup.tsx',
  'packages/@charizardxx/core/src/components/Radio/RadioIndicator/RadioIndicator.tsx',
  'packages/@charizardxx/core/src/components/Radio/RadioCard/RadioCard.tsx',

  // Tabs
  'packages/@charizardxx/core/src/components/Tabs/TabsTab/TabsTab.tsx',
  'packages/@charizardxx/core/src/components/Tabs/TabsList/TabsList.tsx',
  'packages/@charizardxx/core/src/components/Tabs/TabsPanel/TabsPanel.tsx',

  // Accordion
  'packages/@charizardxx/core/src/components/Accordion/AccordionItem/AccordionItem.tsx',
  'packages/@charizardxx/core/src/components/Accordion/AccordionControl/AccordionControl.tsx',

  // Pill
  'packages/@charizardxx/core/src/components/Pill/PillGroup/PillGroup.tsx',

  // PillsInput
  'packages/@charizardxx/core/src/components/PillsInput/PillsInputField/PillsInputField.tsx',

  // Pagination
  'packages/@charizardxx/core/src/components/Pagination/PaginationRoot/PaginationRoot.tsx',
  'packages/@charizardxx/core/src/components/Pagination/PaginationItems/PaginationItems.tsx',
  'packages/@charizardxx/core/src/components/Pagination/PaginationDots/PaginationDots.tsx',
  'packages/@charizardxx/core/src/components/Pagination/PaginationEdges/PaginationEdges.tsx',
  'packages/@charizardxx/core/src/components/Pagination/PaginationControl/PaginationControl.tsx',

  // Combobox
  'packages/@charizardxx/core/src/components/Combobox/ComboboxOption/ComboboxOption.tsx',
  'packages/@charizardxx/core/src/components/Combobox/ComboboxDropdown/ComboboxDropdown.tsx',
  'packages/@charizardxx/core/src/components/Combobox/ComboboxTarget/ComboboxTarget.tsx',
  'packages/@charizardxx/core/src/components/Combobox/ComboboxDropdownTarget/ComboboxDropdownTarget.tsx',
  'packages/@charizardxx/core/src/components/Combobox/ComboboxEventsTarget/ComboboxEventsTarget.tsx',
  'packages/@charizardxx/core/src/components/Combobox/ComboboxDropdown/ComboboxDropdown.tsx',
  'packages/@charizardxx/core/src/components/Combobox/ComboboxGroup/ComboboxGroup.tsx',

  // AppShell
  'packages/@charizardxx/core/src/components/AppShell/AppShellAside/AppShellAside.tsx',
  'packages/@charizardxx/core/src/components/AppShell/AppShellNavbar/AppShellNavbar.tsx',
  'packages/@charizardxx/core/src/components/AppShell/AppShellHeader/AppShellHeader.tsx',
  'packages/@charizardxx/core/src/components/AppShell/AppShellFooter/AppShellFooter.tsx',
  'packages/@charizardxx/core/src/components/AppShell/AppShellSection/AppShellSection.tsx',

  // Grid
  'packages/@charizardxx/core/src/components/Grid/GridCol/GridCol.tsx',

  // HoverCard
  'packages/@charizardxx/core/src/components/HoverCard/HoverCardTarget/HoverCardTarget.tsx',

  // Menu
  'packages/@charizardxx/core/src/components/Menu/MenuItem/MenuItem.tsx',
  'packages/@charizardxx/core/src/components/Menu/MenuTarget/MenuTarget.tsx',

  // Progress
  'packages/@charizardxx/core/src/components/Progress/ProgressSection/ProgressSection.tsx',
  'packages/@charizardxx/core/src/components/Progress/ProgressRoot/ProgressRoot.tsx',

  // Chip
  'packages/@charizardxx/core/src/components/Chip/ChipGroup/ChipGroup.tsx',

  // Card
  'packages/@charizardxx/core/src/components/Card/CardSection/CardSection.tsx',

  // Stepper
  'packages/@charizardxx/core/src/components/Stepper/StepperStep/StepperStep.tsx',

  // Timeline
  'packages/@charizardxx/core/src/components/Timeline/TimelineItem/TimelineItem.tsx',

  // List
  'packages/@charizardxx/core/src/components/List/ListItem/ListItem.tsx',

  // Spotlight
  'packages/@charizardxx/spotlight/src/Spotlight.tsx',
  'packages/@charizardxx/spotlight/src/SpotlightAction.tsx',
  'packages/@charizardxx/spotlight/src/SpotlightActionsGroup.tsx',
  'packages/@charizardxx/spotlight/src/SpotlightRoot.tsx',
  'packages/@charizardxx/spotlight/src/SpotlightSearch.tsx',

  // Carousel
  'packages/@charizardxx/carousel/src/Carousel.tsx',

  // Dropzone
  'packages/@charizardxx/dropzone/src/Dropzone.tsx',
  'packages/@charizardxx/dropzone/src/DropzoneFullScreen.tsx',

  // CodeHighlight
  'packages/@charizardxx/code-highlight/src/CodeHighlight.tsx',
  'packages/@charizardxx/code-highlight/src/CodeHighlightTabs.tsx',
  'packages/@charizardxx/code-highlight/src/InlineCodeHighlight.tsx',

  // Nprogress
  'packages/@charizardxx/nprogress/src/NavigationProgress.tsx',

  // Modals
  'packages/@charizardxx/modals/src/ModalsProvider.tsx',

  // Tiptap
  'packages/@charizardxx/tiptap/src/RichTextEditor.tsx',

  // Notifications
  'packages/@charizardxx/notifications/src/Notifications.tsx',
]);

export const DOCGEN_PATHS = getDeclarationsPaths([
  { type: 'package', path: getPath('packages/@charizardxx/core/src/components') },
  { type: 'package', path: getPath('packages/@charizardxx/dates/src/components') },
  { type: 'package', path: getPath('packages/@charizardxx/charts/src') },
  ...FILES_PATHS.map((filePath) => ({ type: 'file' as const, path: filePath })),
]);
