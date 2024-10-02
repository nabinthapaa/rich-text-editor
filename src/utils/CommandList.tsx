import { Text } from "lucide-react";
import { Component, KeyboardEvent } from "react";
import "./index.css";
import { Suggestions } from "./suggestionLists";

interface CommandListProps {
  items: Suggestions[];
  //eslint-disable-next-line
  command: (T: any) => void;
}

export class CommandsList extends Component<CommandListProps> {
  state = {
    selectedIndex: 0,
  };

  componentDidUpdate(oldProps: CommandListProps) {
    if (this.props.items !== oldProps.items) {
      this.setState({
        selectedIndex: 0,
      });
    }
  }

  //@ts-expect-error Implicit types
  selectItem = (index) => {
    const item = this.props.items[this.state.selectedIndex || index];
    if (item) {
      this.props.command(item);
    }
  };

  onKeyDown = (event: KeyboardEvent) => {
    console.log("Event");
    if (event.key === "ArrowUp") {
      this.upHandler();
      return true;
    }
    if (event.key === "ArrowDown") {
      this.downHandler();
      return true;
    }
    if (event.key === "Enter") {
      this.enterHandler();
      return true;
    }
    return false;
  };

  upHandler() {
    this.setState({
      selectedIndex:
        ((this.state.selectedIndex || 0) + this.props.items.length - 1) %
        this.props.items.length,
    });
  }

  downHandler() {
    this.setState({
      selectedIndex:
        this.state.selectedIndex === null
          ? 0
          : ((this.state.selectedIndex || 0) + 1) % this.props.items.length,
    });
  }

  enterHandler() {
    this.selectItem(this.state.selectedIndex);
  }

  render() {
    const items = this.props.items;
    return (
      <>
        <div className="dropdown-menu">
          {items.length ? (
            items.map((item, index) => (
              <button
                key={index}
                className={
                  this.state.selectedIndex === index ? "is-selected" : ""
                }
                onClick={() => this.selectItem(index)}
              >
                {item.icon || <Text size={24} color="#89C6DA" />}{" "}
                <span>{item.title}</span>
              </button>
            ))
          ) : (
            <div className="item">No result</div>
          )}
        </div>
      </>
    );
  }
}
