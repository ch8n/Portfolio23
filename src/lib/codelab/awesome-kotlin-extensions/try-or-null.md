# That how we Catch ?: Errors !!
How to take advantage of try catch expression and null check to make error validation elegant.

--- 
## TLDR 💻

Here is a snippet you can copy paste directly paste into your code base,

```kotlin 
inline fun <T> tryOrNull(action:(Unit)->T):T? = {
  action.invoke()
} catch (e:Exception){
  Timber.w(e)// don't forget your error logging
  null
}
```

Now that's out of the way, You can enjoy the rest of the read! ☕️

---

It's a common practice to put any code which can throw an exception into a try-catch block. In Java it’s syntax pretty much looks like 

```kotlin
try {  
	//statements that may cause an exception
} catch (Exception e) { 
	//error handling code
}
```

You can’t return result from try or catch blocks so you need to use accumulator pattern to collect the result them, thus code would pretty much looks like

```kotlin
String runAway; // null

try {  
	runAway = escapeFromShip(); // Success or null
} catch (Exception e) {
	runAway = "" // failed
}

/*
 * ... later some code validation to check if the 
 * value of result is correct or not
/
```

This kind of flow makes lots of mutation points and validation to make sure our code is safe from crash. In Kotlin this flow is handled much more elegantly by treating try catch as expression not as block, and can be assigned to variable.

```kotlin
val runAway:String? = try {  
	escapeFromShip(); // Success or null
} catch (e:Exception) {  
	""	//failed
}
//.. validation for result is added later 
```

Here accumulation problem is solved since last expression is returned from try catch block, but we still need to validate for right results, which can introduce lots of noise and ceremonial prone code.

## 🤔 How to make Validation Fluent❓

If you have paid attention to Kotlin standard extension API they consist of function that are in form of getOrNull i.e they `return value or null`, which are on-spot name and design for what we want and works on the same principle.
If we consider null as an error state we can take advantage of Kotlin null check operators `!!` , `?:` to gracefully handling flow.

So , I can up with this extension :

```kotlin
inline fun <T> tryOrNull(action:(Unit)->T):T? = {
  action.invoke()
} catch (e:Exception){
  Timber.w(e)// don't forget your error logging
  null
}
```

Now let's see the fruits of your efforts! 🤩

```kotlin
val runAway:String? = tryOrNull { escapeFromShip() } //esape or fail 

val usingTheResut = result ?: ""

// or

result?.let{ //doSomthing }
```

That's all fokes 🐰🥕 ! See ya again in next post .. Happy Hacking 💻 .