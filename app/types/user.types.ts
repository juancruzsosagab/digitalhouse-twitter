type BaseUserType = {
	"id": string,
	"username": string,
	"name": string,
	"photoUrl": string,
}

export type TrendingUserType = BaseUserType & {
	"count": number,
}

export type UserType = BaseUserType &{
	"bio": string,
	"createdAt": string,
	"followersCount": number,
	"followingCount": number,
	"messageCount": number,
}