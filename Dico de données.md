# Dictionnaire des données 


## User (`users`)
|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|The identifier of the user|
|firstname|VARCHAR(200)|NULL|The firstname of the user|
|lastname|VARCHAR(200)|NULL|The lastname of the user|
|nickname|VARCHAR(200)|NOT NULL|The nickname of the user|
|email|VARCHAR(200)|NOT NULL, UNIQUE|The email of the user|
|roles|VARCHAR(200)|NOT NULL|The role of the user(SUPER_ADMIN, ADMIN, MODERATOR, USER, VISITOR)|
|password|VARCHAR(200)|NOT NULL|The password of the user|
|picture|VARCHAR(200)|NULL|The picture of the user|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|The date of the count creation|
|updated_at|TIMESTAMP|NULL|The date of the last count update|

## Comment (`comments`)
|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|The identifier of the comment|
|description|VARCHAR(255)|NOT NULL|The comment of the picture|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|The date of the comment creation|
|updated_at|TIMESTAMP|NULL|The date of the last comment update|

## Post (`posts`)
|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|The identifier of the comment|
|picture|VARCHAR(200)|NOT NULL|The picture of the animal|
|comment|VARCHAR(255)|NOT NULL|The comment of the picture|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|The date of the comment creation|
|updated_at|TIMESTAMP|NULL|The date of the last comment update|

## Category (`categories`)
|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|The identifier of the comment|
|name|VARCHAR(200)|NOT NULL|The name of the category|
|description|VARCHAR(255)|NULL|The description of the category|
|picturecategory|VARCHAR(200)|NOT NULL|The picture of the category|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|The date of the comment creation|
|updated_at|TIMESTAMP|NULL|The date of the last comment update|

## Like (`likes`)
|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|The identifier of the comment|
|number|int|NOT NULL|The number of the likes linked to a post|
|created_at|TIMESTAMP|NULL, DEFAULT CURRENT_TIMESTAMP|The date of the comment creation|
|updated_at|TIMESTAMP|NULL|The date of the last comment update|