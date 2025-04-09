export class Connection<
  A extends Node = Node,
  B extends Node = Node,
> extends ClassicPreset.Connection<A, B> {
  selected?: boolean;

  constructor(source: A, sourceOutput: never, target: B, targetInput: never) {
    super(source, sourceOutput, target, targetInput);
    this.selected = false;
  }
}
