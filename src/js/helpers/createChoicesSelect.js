export function createChoices(id) {
  return new Choices(id, {
    paste: false,
    searchEnabled: false,
    searchChoices: false,
    position: "bottom",
    shouldSort: false,
    itemSelectText: "1",
  
    classNames: {
      containerOuter: "choices",
      containerInner: "choices__inn",
      list: "choices__lis",
      listItems: "choices__list--multipl",
      listSingle: "choices__list--singl",
      listDropdown: "choices__list--dropdown",
      item: "choices__ite",
      itemSelectable: "choices__item--selectabl",
      itemDisabled: "choices__item--disable",
      itemOption: "choices__item--choic",
      activeState: "is-active",
      focusState: "is-focused",
      openState: "is-open",
      disabledState: "is-disabled",
      highlightedState: "is-highlighted",
      selectedState: "is-selected",
      flippedState: "is-flipped",
      selectedState: "is-highlighted",
    },
  });
}