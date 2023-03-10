import { SpruceErrors } from "#spruce/errors/errors.types"
import { ErrorOptions as ISpruceErrorOptions} from "@sprucelabs/error"

export interface NoBotInstanceSetErrorOptions extends SpruceErrors.SprucebotLlm.NoBotInstanceSet, ISpruceErrorOptions {
	code: 'NO_BOT_INSTANCE_SET'
}

type ErrorOptions =  | NoBotInstanceSetErrorOptions 

export default ErrorOptions
