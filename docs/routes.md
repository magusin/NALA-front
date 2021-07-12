# Routes

## VISITOR (`VISITOR`)

| URL | HTTP Method | Title | Content | Comment |
|--|--|--|--|--|
| `/` | `GET` | ACCUEIL | TOP-LOVE, LAST-PUBLICATION | HOMEPAGE |
| `/categories` | `GET` | CATEGORIES | ALL CATEGORIES| CATEGORIES |
| `/toplove` | `GET` | TOP-LOVE | TOP-LOVE IMAGE | TOP-LOVE |
| `/register` | `GET` | REGISTRATION | REGISTRATION FORM | REGISTRATION |
| `/connection` | `GET` | CONNECTION | CONNECTION FORM | CONNECTION |
| `/post/{id}` | `GET` | POST NAME | POST | POST |
| `/contact` | `GET` | CONTACT | CONTACT FORM | CONTACT |
| `/legalnotices` | `GET` | LEGAL NOTICES | LEGAL NOTICES TEXT | LEGAL NOTICES |
| `/cgu` | `GET` | CGU | CGU | CGU |

## USER (`USER`)

| URL | HTTP Method | Title | Content | Comment |
|--|--|--|--|--|
| `/profile` | `GET` | PROFILE | POSTS, PROFILE | PROFILE |
| `/notifications` | `GET` | NOTIFICATIONS | NOTIFICATIONS | NOTIFICATIONS |
| `/follows` | `GET` | FOLLOWS | FOLLOWERS POST | FOLLOWERS |
| `/likes` | `GET` | LIKES | LIKED POSTS | LIKE |
| `/tags` | `GET` | FAVORITE TAGS | FAVORITE TAGS | TAGS |
| `/disconnect` | `POST` | DISCONNECT | DISCONNECT | DISCONNECT |

## ADMIN (`ADMIN`)
| URL | HTTP Method | Title | Content | Comment |
|--|--|--|--|--|
| `/admin` | `GET` | ADMIN  | BACKOFFICE | BACKOFFICE |
| `/admin/connection` | `GET` | ADMIN CONNECTION  | CONNECTION FORM | CONNECTION |
| `/admin/disconnect` | `POST` | ADMIN CONNECTION  | CONNECTION FORM | DISCONNECT |



