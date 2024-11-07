/**
 * This code was generated by "react-native codegen-harmony"
 *
 * Do not edit this file as changes may cause incorrect behavior and will be
 * lost once the code is regenerated.
 *
 * @generatorVersion: 1
 */

import {
  Descriptor as ComponentDescriptor,
  ViewBaseProps,
  ViewRawProps,
  ViewDescriptorWrapperBase,
  ColorValue,
  Color,
  RNInstance,
  Tag,
  RNComponentCommandReceiver,
  ViewPropsSelector,
} from '@rnoh/react-native-openharmony/ts';


export namespace RNDatePicker {
  export const NAME = "RNDatePicker" as const

  export interface DirectRawProps {
    locale?: string;
    date: number;
    maximumDate?: number;
    minimumDate?: number;
    minuteInterval?: number;
    mode?: 'date' | 'time' | 'datetime';
    timeZoneOffsetInMinutes?: string;
    textColor?: string;
    dividerColor?: string;
    buttonColor?: string;
    is24hourSource?: 'locale' | 'device';
    theme?: 'light' | 'dark' | 'auto';
    modal?: boolean;
    open?: boolean;
    confirmText?: string;
    cancelText?: string;
    title?: string;
  }
  
  export interface Props extends ViewBaseProps {}
  
  export interface State {}
  
  export interface RawProps extends ViewRawProps, DirectRawProps {}
  
  export class PropsSelector extends ViewPropsSelector<Props, RawProps> {
    get locale() {
      return this.rawProps.locale;
    }
    
    get date() {
      return this.rawProps.date ?? 0;
    }
    
    get maximumDate() {
      return this.rawProps.maximumDate ?? 0;
    }
    
    get minimumDate() {
      return this.rawProps.minimumDate ?? 0;
    }
    
    get minuteInterval() {
      return this.rawProps.minuteInterval ?? 0;
    }
    
    get mode() {
      return this.rawProps.mode ?? 'datetime';
    }
    
    get timeZoneOffsetInMinutes() {
      return this.rawProps.timeZoneOffsetInMinutes;
    }
    
    get textColor() {
      return this.rawProps.textColor;
    }
    
    get dividerColor() {
      return this.rawProps.dividerColor;
    }
    
    get buttonColor() {
      return this.rawProps.buttonColor;
    }
    
    get is24hourSource() {
      return this.rawProps.is24hourSource ?? 'device';
    }
    
    get theme() {
      return this.rawProps.theme ?? 'auto';
    }
    
    get modal() {
      return this.rawProps.modal ?? false;
    }
    
    get open() {
      return this.rawProps.open ?? false;
    }
    
    get confirmText() {
      return this.rawProps.confirmText;
    }
    
    get cancelText() {
      return this.rawProps.cancelText;
    }
    
    get title() {
      return this.rawProps.title;
    }
    
  
  }

  export type Descriptor = ComponentDescriptor<
    typeof NAME,
    Props,
    State,
    RawProps
  >;
  
  export class DescriptorWrapper extends ViewDescriptorWrapperBase<
    typeof NAME,
    Props,
    State,
    RawProps,
    PropsSelector
  > {
    protected createPropsSelector() {
      return new PropsSelector(this.descriptor.props, this.descriptor.rawProps)
    }
  }
  
  export interface EventPayloadByName {
    "change": {timestamp: number}
    "confirm": {timestamp: number}
    "cancel": {}
  }
  
  export class EventEmitter {
    constructor(private rnInstance: RNInstance, private tag: Tag) {}
    
    emit<TEventName extends keyof EventPayloadByName>(eventName: TEventName, payload: EventPayloadByName[TEventName]) {
      this.rnInstance.emitComponentEvent(this.tag, eventName, payload)
    }
  }
  
  export interface CommandArgvByName {
  }
  
  export class CommandReceiver {
    private listenersByCommandName = new Map<string, Set<(...args: any[]) => void>>()
    private cleanUp: (() => void) | undefined = undefined
  
    constructor(private componentCommandReceiver: RNComponentCommandReceiver, private tag: Tag) {
    }
  
    subscribe<TCommandName extends keyof CommandArgvByName>(commandName: TCommandName, listener: (argv: CommandArgvByName[TCommandName]) => void) {
      if (!this.listenersByCommandName.has(commandName)) {
        this.listenersByCommandName.set(commandName, new Set())
      }
      this.listenersByCommandName.get(commandName)!.add(listener)
      const hasRegisteredCommandReceiver = !!this.cleanUp
      if (!hasRegisteredCommandReceiver) {
        this.cleanUp = this.componentCommandReceiver.registerCommandCallback(this.tag, (commandName: string, argv: any[]) => {
          if (this.listenersByCommandName.has(commandName)) {
            const listeners = this.listenersByCommandName.get(commandName)!
            listeners.forEach(listener => {
              listener(argv)
            })
          }
        })
      }
  
      return () => {
        this.listenersByCommandName.get(commandName)?.delete(listener)
        if (this.listenersByCommandName.get(commandName)?.size ?? 0 === 0) {
          this.listenersByCommandName.delete(commandName)
        }
        if (this.listenersByCommandName.size === 0) {
          this.cleanUp?.()
        }
      }
    }
  }

}