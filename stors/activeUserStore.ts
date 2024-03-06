import { createEvent, createStore } from "effector";

export const loginUser = createEvent()
export const exitUser = createEvent()

export const $activeUser = createStore([])

$activeUser
	.on(loginUser, (_, user) => user)
	.reset(exitUser)

$activeUser.watch((e) => console.log(e))