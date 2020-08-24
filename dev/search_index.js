var documenterSearchIndex = {"docs":
[{"location":"stack/#Stack-Machine","page":"Stack Machine","title":"Stack Machine","text":"","category":"section"},{"location":"stack/","page":"Stack Machine","title":"Stack Machine","text":"The pickle is composed of opcodes and arguments that control over stack machine. A stack machine will be executed with commands and rebuild the same object.","category":"page"},{"location":"stack/","page":"Stack Machine","title":"Stack Machine","text":"Modules = [Pickle.OpCodes]\nPages = [\"opcode.jl\"]","category":"page"},{"location":"stack/#Pickle.OpCodes.OpCode","page":"Stack Machine","title":"Pickle.OpCodes.OpCode","text":"OpCodes of Pickle stack machine.\n\n\n\n\n\n","category":"type"},{"location":"stack/#Pickle.OpCodes.argument-Tuple{Pickle.OpCodes.OpCode}","page":"Stack Machine","title":"Pickle.OpCodes.argument","text":"argument(::OpCode)\n\nreturn the argument reader of an OpCode.\n\n\n\n\n\n","category":"method"},{"location":"stack/#Pickle.OpCodes.genops","page":"Stack Machine","title":"Pickle.OpCodes.genops","text":"genops(io::IO, yield_end_pos=false)\n\nGenerate/Dump all the opcode from pickle io.\n\n\n\n\n\n","category":"function"},{"location":"opcode/#OpCodes","page":"OpCodes","title":"OpCodes","text":"","category":"section"},{"location":"opcode/","page":"OpCodes","title":"OpCodes","text":"These documents are taken from cpython/Lib/pickletools, so it's possible that their behavior are different from Pickle.jl.","category":"page"},{"location":"opcode/","page":"OpCodes","title":"OpCodes","text":"Modules = [Pickle.OpCodes]\nPages = [\"opcode_desc.jl\"]","category":"page"},{"location":"opcode/#Pickle.OpCodes.ADDITEMS","page":"OpCodes","title":"Pickle.OpCodes.ADDITEMS","text":"Add an arbitrary number of items to an existing set.\n\nThe slice of the stack following the topmost markobject is taken as   a sequence of items, added to the set immediately under the topmost   markobject.  Everything at and after the topmost markobject is popped,   leaving the mutated set at the top of the stack.\n\nStack before:  ... pyset markobject item_1 ... item_n\nStack after:   ... pyset\n\nwhere pyset has been modified via pyset.add(itemi) = itemi for i in   1, 2, ..., n, and in that order.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.APPEND","page":"OpCodes","title":"Pickle.OpCodes.APPEND","text":"Append an object to a list.\n\nStack before:  ... pylist anyobject\nStack after:   ... pylist+[anyobject]\n\nalthough pylist is really extended in-place.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.APPENDS","page":"OpCodes","title":"Pickle.OpCodes.APPENDS","text":"Extend a list by a slice of stack objects.\n\nStack before:  ... pylist markobject stackslice\nStack after:   ... pylist+stackslice\n\nalthough pylist is really extended in-place.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.BINBYTES","page":"OpCodes","title":"Pickle.OpCodes.BINBYTES","text":"Push a Python bytes object.\n\nThere are two arguments:  the first is a 4-byte little-endian unsigned int   giving the number of bytes, and the second is that many bytes, which are   taken literally as the bytes content.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.BINBYTES8","page":"OpCodes","title":"Pickle.OpCodes.BINBYTES8","text":"Push a Python bytes object.\n\nThere are two arguments:  the first is an 8-byte unsigned int giving   the number of bytes in the string, and the second is that many bytes,   which are taken literally as the string content.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.BINFLOAT","page":"OpCodes","title":"Pickle.OpCodes.BINFLOAT","text":"Float stored in binary form, with 8 bytes of data.\n\nThis generally requires less than half the space of FLOAT encoding.   In general, BINFLOAT cannot be used to transport infinities, NaNs, or   minus zero, raises an exception if the exponent exceeds the range of   an IEEE-754 double, and retains no more than 53 bits of precision (if   there are more than that, \"add a half and chop\" rounding is used to   cut it back to 53 significant bits).\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.BINGET","page":"OpCodes","title":"Pickle.OpCodes.BINGET","text":"Read an object from the memo and push it on the stack.\n\nThe index of the memo object to push is given by the 1-byte unsigned   integer following.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.BININT","page":"OpCodes","title":"Pickle.OpCodes.BININT","text":"Push a four-byte signed integer.\n\nThis handles the full range of Python (short) integers on a 32-bit   box, directly as binary bytes (1 for the opcode and 4 for the integer).   If the integer is non-negative and fits in 1 or 2 bytes, pickling via   BININT1 or BININT2 saves space.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.BININT1","page":"OpCodes","title":"Pickle.OpCodes.BININT1","text":"Push a one-byte unsigned integer.\n\nThis is a space optimization for pickling very small non-negative ints,   in range(256).\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.BININT2","page":"OpCodes","title":"Pickle.OpCodes.BININT2","text":"Push a two-byte unsigned integer.\n\nThis is a space optimization for pickling small positive ints, in   range(256, 2**16).  Integers in range(256) can also be pickled via   BININT2, but BININT1 instead saves a byte.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.BINPERSID","page":"OpCodes","title":"Pickle.OpCodes.BINPERSID","text":"Push an object identified by a persistent ID.\n\nLike PERSID, except the persistent ID is popped off the stack (instead   of being a string embedded in the opcode bytestream).  The persistent   ID is passed to self.persistent_load(), and whatever object that   returns is pushed on the stack.  See PERSID for more detail.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.BINPUT","page":"OpCodes","title":"Pickle.OpCodes.BINPUT","text":"Store the stack top into the memo.  The stack is not popped.\n\nThe index of the memo location to write into is given by the 1-byte   unsigned integer following.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.BINSTRING","page":"OpCodes","title":"Pickle.OpCodes.BINSTRING","text":"Push a Python string object.\n\nThere are two arguments: the first is a 4-byte little-endian   signed int giving the number of bytes in the string, and the   second is that many bytes, which are taken literally as the string   content.  These are usually decoded into a str instance using the   encoding given to the Unpickler constructor. or the default,   'ASCII'.  If the encoding given was 'bytes' however, they will be   decoded as bytes object instead.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.BINUNICODE","page":"OpCodes","title":"Pickle.OpCodes.BINUNICODE","text":"Push a Python Unicode string object.\n\nThere are two arguments:  the first is a 4-byte little-endian unsigned int   giving the number of bytes in the string.  The second is that many   bytes, and is the UTF-8 encoding of the Unicode string.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.BINUNICODE8","page":"OpCodes","title":"Pickle.OpCodes.BINUNICODE8","text":"Push a Python Unicode string object.\n\nThere are two arguments:  the first is an 8-byte little-endian signed int   giving the number of bytes in the string.  The second is that many   bytes, and is the UTF-8 encoding of the Unicode string.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.BUILD","page":"OpCodes","title":"Pickle.OpCodes.BUILD","text":"Finish building an object, via setstate or dict update.\n\nStack before: ... anyobject argument\nStack after:  ... anyobject\n\nwhere anyobject may have been mutated, as follows:\n\nIf the object has a setstate method,\n\n  anyobject.__setstate__(argument)\n\nis called.\n\nElse the argument must be a dict, the object must have a dict, and   the object is updated via\n\n  anyobject.__dict__.update(argument)\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.BYTEARRAY8","page":"OpCodes","title":"Pickle.OpCodes.BYTEARRAY8","text":"Push a Python bytearray object.\n\nThere are two arguments:  the first is an 8-byte unsigned int giving   the number of bytes in the bytearray, and the second is that many bytes,   which are taken literally as the bytearray content.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.DICT","page":"OpCodes","title":"Pickle.OpCodes.DICT","text":"Build a dict out of the topmost stack slice, after markobject.\n\nAll the stack entries following the topmost markobject are placed into   a single Python dict, which single dict object replaces all of the   stack from the topmost markobject onward.  The stack slice alternates   key, value, key, value, ....  For example,\n\nStack before: ... markobject 1 2 3 'abc'\nStack after:  ... {1: 2, 3: 'abc'}\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.DUP","page":"OpCodes","title":"Pickle.OpCodes.DUP","text":"Push the top stack item onto the stack again, duplicating it.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.EMPTY_DICT","page":"OpCodes","title":"Pickle.OpCodes.EMPTY_DICT","text":"Push an empty dict.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.EMPTY_LIST","page":"OpCodes","title":"Pickle.OpCodes.EMPTY_LIST","text":"Push an empty list.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.EMPTY_SET","page":"OpCodes","title":"Pickle.OpCodes.EMPTY_SET","text":"Push an empty set.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.EMPTY_TUPLE","page":"OpCodes","title":"Pickle.OpCodes.EMPTY_TUPLE","text":"Push an empty tuple.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.EXT1","page":"OpCodes","title":"Pickle.OpCodes.EXT1","text":"Extension code.\n\nThis code and the similar EXT2 and EXT4 allow using a registry   of popular objects that are pickled by name, typically classes.   It is envisioned that through a global negotiation and   registration process, third parties can set up a mapping between   ints and object names.\n\nIn order to guarantee pickle interchangeability, the extension   code registry ought to be global, although a range of codes may   be reserved for private use.\n\nEXT1 has a 1-byte integer argument.  This is used to index into the   extension registry, and the object at that index is pushed on the stack.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.EXT2","page":"OpCodes","title":"Pickle.OpCodes.EXT2","text":"Extension code.\n\nSee EXT1.  EXT2 has a two-byte integer argument.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.EXT4","page":"OpCodes","title":"Pickle.OpCodes.EXT4","text":"Extension code.\n\nSee EXT1.  EXT4 has a four-byte integer argument.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.FLOAT","page":"OpCodes","title":"Pickle.OpCodes.FLOAT","text":"Newline-terminated decimal float literal.\n\nThe argument is repr(a_float), and in general requires 17 significant   digits for roundtrip conversion to be an identity (this is so for   IEEE-754 double precision values, which is what Python float maps to   on most boxes).\n\nIn general, FLOAT cannot be used to transport infinities, NaNs, or   minus zero across boxes (or even on a single box, if the platform C   library can't read the strings it produces for such things – Windows   is like that), but may do less damage than BINFLOAT on boxes with   greater precision or dynamic range than IEEE-754 double.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.FRAME","page":"OpCodes","title":"Pickle.OpCodes.FRAME","text":"Indicate the beginning of a new frame.\n\nThe unpickler may use this opcode to safely prefetch data from its   underlying stream.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.FROZENSET","page":"OpCodes","title":"Pickle.OpCodes.FROZENSET","text":"Build a frozenset out of the topmost slice, after markobject.\n\nAll the stack entries following the topmost markobject are placed into   a single Python frozenset, which single frozenset object replaces all   of the stack from the topmost markobject onward.  For example,\n\nStack before: ... markobject 1 2 3\nStack after:  ... frozenset({1, 2, 3})\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.GET","page":"OpCodes","title":"Pickle.OpCodes.GET","text":"Read an object from the memo and push it on the stack.\n\nThe index of the memo object to push is given by the newline-terminated   decimal string following.  BINGET and LONG_BINGET are space-optimized   versions.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.GLOBAL","page":"OpCodes","title":"Pickle.OpCodes.GLOBAL","text":"Push a global object (module.attr) on the stack.\n\nTwo newline-terminated strings follow the GLOBAL opcode.  The first is   taken as a module name, and the second as a class name.  The class   object module.class is pushed on the stack.  More accurately, the   object returned by self.find_class(module, class) is pushed on the   stack, so unpickling subclasses can override this form of lookup.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.INST","page":"OpCodes","title":"Pickle.OpCodes.INST","text":"Build a class instance.\n\nThis is the protocol 0 version of protocol 1's OBJ opcode.   INST is followed by two newline-terminated strings, giving a   module and class name, just as for the GLOBAL opcode (and see   GLOBAL for more details about that).  self.find_class(module, name)   is used to get a class object.\n\nIn addition, all the objects on the stack following the topmost   markobject are gathered into a tuple and popped (along with the   topmost markobject), just as for the TUPLE opcode.\n\nNow it gets complicated.  If all of these are true:\n\n+ The argtuple is empty (markobject was at the top of the stack\n  at the start).\n+ The class object does not have a __getinitargs__ attribute.\n\nthen we want to create an old-style class instance without invoking   its init() method (pickle has waffled on this over the years; not   calling init() is current wisdom).  In this case, an instance of   an old-style dummy class is created, and then we try to rebind its   class attribute to the desired class object.  If this succeeds,   the new instance object is pushed on the stack, and we're done.\n\nElse (the argtuple is not empty, it's not an old-style class object,   or the class object does have a getinitargs attribute), the code   first insists that the class object have a safeforunpickling   attribute.  Unlike as for the safeforunpickling check in REDUCE,   it doesn't matter whether this attribute has a true or false value, it   only matters whether it exists (XXX this is a bug).  If   safeforunpickling doesn't exist, UnpicklingError is raised.\n\nElse (the class object does have a safeforunpickling attr),   the class object obtained from INST's arguments is applied to the   argtuple obtained from the stack, and the resulting instance object   is pushed on the stack.\n\nNOTE:  checks for safeforunpickling went away in Python 2.3.   NOTE:  the distinction between old-style and new-style classes does          not make sense in Python 3.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.INT","page":"OpCodes","title":"Pickle.OpCodes.INT","text":"Push an integer or bool.\n\nThe argument is a newline-terminated decimal literal string.   The intent may have been that this always fit in a short Python int,   but INT can be generated in pickles written on a 64-bit box that   require a Python long on a 32-bit box.  The difference between this   and LONG then is that INT skips a trailing 'L', and produces a short   int whenever possible.\n\nAnother difference is due to that, when bool was introduced as a   distinct type in 2.3, builtin names True and False were also added to   2.2.2, mapping to ints 1 and 0.  For compatibility in both directions,   True gets pickled as INT + \"I01\\n\", and False as INT + \"I00\\n\".   Leading zeroes are never produced for a genuine integer.  The 2.3   (and later) unpicklers special-case these and return bool instead;   earlier unpicklers ignore the leading \"0\" and return the int.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.LIST","page":"OpCodes","title":"Pickle.OpCodes.LIST","text":"Build a list out of the topmost stack slice, after markobject.\n\nAll the stack entries following the topmost markobject are placed into   a single Python list, which single list object replaces all of the   stack from the topmost markobject onward.  For example,\n\nStack before: ... markobject 1 2 3 'abc'\nStack after:  ... [1, 2, 3, 'abc']\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.LONG","page":"OpCodes","title":"Pickle.OpCodes.LONG","text":"Push a long integer.\n\nThe same as INT, except that the literal ends with 'L', and always   unpickles to a Python long.  There doesn't seem a real purpose to the   trailing 'L'.\n\nNote that LONG takes time quadratic in the number of digits when   unpickling (this is simply due to the nature of decimal->binary   conversion).  Proto 2 added linear-time (in C; still quadratic-time   in Python) LONG1 and LONG4 opcodes.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.LONG1","page":"OpCodes","title":"Pickle.OpCodes.LONG1","text":"Long integer using one-byte length.\n\nA more efficient encoding of a Python long; the long1 encoding   says it all.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.LONG4","page":"OpCodes","title":"Pickle.OpCodes.LONG4","text":"Long integer using found-byte length.\n\nA more efficient encoding of a Python long; the long4 encoding   says it all.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.LONG_BINGET","page":"OpCodes","title":"Pickle.OpCodes.LONG_BINGET","text":"Read an object from the memo and push it on the stack.\n\nThe index of the memo object to push is given by the 4-byte unsigned   little-endian integer following.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.LONG_BINPUT","page":"OpCodes","title":"Pickle.OpCodes.LONG_BINPUT","text":"Store the stack top into the memo.  The stack is not popped.\n\nThe index of the memo location to write into is given by the 4-byte   unsigned little-endian integer following.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.MARK","page":"OpCodes","title":"Pickle.OpCodes.MARK","text":"Push markobject onto the stack.\n\nmarkobject is a unique object, used by other opcodes to identify a   region of the stack containing a variable number of objects for them   to work on.  See markobject.doc for more detail.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.MEMOIZE","page":"OpCodes","title":"Pickle.OpCodes.MEMOIZE","text":"Store the stack top into the memo.  The stack is not popped.\n\nThe index of the memo location to write is the number of   elements currently present in the memo.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.NEWFALSE","page":"OpCodes","title":"Pickle.OpCodes.NEWFALSE","text":"Push False onto the stack.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.NEWOBJ","page":"OpCodes","title":"Pickle.OpCodes.NEWOBJ","text":"Build an object instance.\n\nThe stack before should be thought of as containing a class   object followed by an argument tuple (the tuple being the stack   top).  Call these cls and args.  They are popped off the stack,   and the value returned by cls.new(cls, *args) is pushed back   onto the stack.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.NEWOBJ_EX","page":"OpCodes","title":"Pickle.OpCodes.NEWOBJ_EX","text":"Build an object instance.\n\nThe stack before should be thought of as containing a class   object followed by an argument tuple and by a keyword argument dict   (the dict being the stack top).  Call these cls and args.  They are   popped off the stack, and the value returned by   cls.new(cls, *args, *kwargs) is  pushed back  onto the stack.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.NEWTRUE","page":"OpCodes","title":"Pickle.OpCodes.NEWTRUE","text":"Push True onto the stack.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.NEXT_BUFFER","page":"OpCodes","title":"Pickle.OpCodes.NEXT_BUFFER","text":"Push an out-of-band buffer object.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.NONE","page":"OpCodes","title":"Pickle.OpCodes.NONE","text":"Push None on the stack.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.OBJ","page":"OpCodes","title":"Pickle.OpCodes.OBJ","text":"Build a class instance.\n\nThis is the protocol 1 version of protocol 0's INST opcode, and is   very much like it.  The major difference is that the class object   is taken off the stack, allowing it to be retrieved from the memo   repeatedly if several instances of the same class are created.  This   can be much more efficient (in both time and space) than repeatedly   embedding the module and class names in INST opcodes.\n\nUnlike INST, OBJ takes no arguments from the opcode stream.  Instead   the class object is taken off the stack, immediately above the   topmost markobject:\n\nStack before: ... markobject classobject stackslice\nStack after:  ... new_instance_object\n\nAs for INST, the remainder of the stack above the markobject is   gathered into an argument tuple, and then the logic seems identical,   except that no safeforunpickling check is done (XXX this is   a bug).  See INST for the gory details.\n\nNOTE:  In Python 2.3, INST and OBJ are identical except for how they   get the class object.  That was always the intent; the implementations   had diverged for accidental reasons.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.PERSID","page":"OpCodes","title":"Pickle.OpCodes.PERSID","text":"Push an object identified by a persistent ID.\n\nThe pickle module doesn't define what a persistent ID means.  PERSID's   argument is a newline-terminated str-style (no embedded escapes, no   bracketing quote characters) string, which is \"the persistent ID\".   The unpickler passes this string to self.persistentload().  Whatever   object that returns is pushed on the stack.  There is no implementation   of persistentload() in Python's unpickler:  it must be supplied by an   unpickler subclass.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.POP","page":"OpCodes","title":"Pickle.OpCodes.POP","text":"Discard the top stack item, shrinking the stack by one item.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.POP_MARK","page":"OpCodes","title":"Pickle.OpCodes.POP_MARK","text":"Pop all the stack objects at and above the topmost markobject.\n\nWhen an opcode using a variable number of stack objects is done,   POP_MARK is used to remove those objects, and to remove the markobject   that delimited their starting position on the stack.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.PROTO","page":"OpCodes","title":"Pickle.OpCodes.PROTO","text":"Protocol version indicator.\n\nFor protocol 2 and above, a pickle must start with this opcode.   The argument is the protocol version, an int in range(2, 256).\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.PUT","page":"OpCodes","title":"Pickle.OpCodes.PUT","text":"Store the stack top into the memo.  The stack is not popped.\n\nThe index of the memo location to write into is given by the newline-   terminated decimal string following.  BINPUT and LONG_BINPUT are   space-optimized versions.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.READONLY_BUFFER","page":"OpCodes","title":"Pickle.OpCodes.READONLY_BUFFER","text":"Make an out-of-band buffer object read-only.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.REDUCE","page":"OpCodes","title":"Pickle.OpCodes.REDUCE","text":"Push an object built from a callable and an argument tuple.\n\nThe opcode is named to remind of the reduce() method.\n\nStack before: ... callable pytuple\nStack after:  ... callable(*pytuple)\n\nThe callable and the argument tuple are the first two items returned   by a reduce method.  Applying the callable to the argtuple is   supposed to reproduce the original object, or at least get it started.   If the reduce method returns a 3-tuple, the last component is an   argument to be passed to the object's setstate, and then the REDUCE   opcode is followed by code to create setstate's argument, and then a   BUILD opcode to apply  setstate to that argument.\n\nIf not isinstance(callable, type), REDUCE complains unless the   callable has been registered with the copyreg module's   safeconstructors dict, or the callable has a magic   '__safefor_unpickling__' attribute with a true value.  I'm not sure   why it does this, but I've sure seen this complaint often enough when   I didn't want to <wink>.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.SETITEM","page":"OpCodes","title":"Pickle.OpCodes.SETITEM","text":"Add a key+value pair to an existing dict.\n\nStack before:  ... pydict key value\nStack after:   ... pydict\n\nwhere pydict has been modified via pydict[key] = value.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.SETITEMS","page":"OpCodes","title":"Pickle.OpCodes.SETITEMS","text":"Add an arbitrary number of key+value pairs to an existing dict.\n\nThe slice of the stack following the topmost markobject is taken as   an alternating sequence of keys and values, added to the dict   immediately under the topmost markobject.  Everything at and after the   topmost markobject is popped, leaving the mutated dict at the top   of the stack.\n\nStack before:  ... pydict markobject key_1 value_1 ... key_n value_n\nStack after:   ... pydict\n\nwhere pydict has been modified via pydict[keyi] = valuei for i in   1, 2, ..., n, and in that order.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.SHORT_BINBYTES","page":"OpCodes","title":"Pickle.OpCodes.SHORT_BINBYTES","text":"Push a Python bytes object.\n\nThere are two arguments:  the first is a 1-byte unsigned int giving   the number of bytes, and the second is that many bytes, which are taken   literally as the string content.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.SHORT_BINSTRING","page":"OpCodes","title":"Pickle.OpCodes.SHORT_BINSTRING","text":"Push a Python string object.\n\nThere are two arguments: the first is a 1-byte unsigned int giving   the number of bytes in the string, and the second is that many   bytes, which are taken literally as the string content.  These are   usually decoded into a str instance using the encoding given to   the Unpickler constructor. or the default, 'ASCII'.  If the   encoding given was 'bytes' however, they will be decoded as bytes   object instead.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.SHORT_BINUNICODE","page":"OpCodes","title":"Pickle.OpCodes.SHORT_BINUNICODE","text":"Push a Python Unicode string object.\n\nThere are two arguments:  the first is a 1-byte little-endian signed int   giving the number of bytes in the string.  The second is that many   bytes, and is the UTF-8 encoding of the Unicode string.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.STACK_GLOBAL","page":"OpCodes","title":"Pickle.OpCodes.STACK_GLOBAL","text":"Push a global object (module.attr) on the stack.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.STOP","page":"OpCodes","title":"Pickle.OpCodes.STOP","text":"Stop the unpickling machine.\n\nEvery pickle ends with this opcode.  The object at the top of the stack   is popped, and that's the result of unpickling.  The stack should be   empty then.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.STRING","page":"OpCodes","title":"Pickle.OpCodes.STRING","text":"Push a Python string object.\n\nThe argument is a repr-style string, with bracketing quote characters,   and perhaps embedded escapes.  The argument extends until the next   newline character.  These are usually decoded into a str instance   using the encoding given to the Unpickler constructor. or the default,   'ASCII'.  If the encoding given was 'bytes' however, they will be   decoded as bytes object instead.\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.TUPLE","page":"OpCodes","title":"Pickle.OpCodes.TUPLE","text":"Build a tuple out of the topmost stack slice, after markobject.\n\nAll the stack entries following the topmost markobject are placed into   a single Python tuple, which single tuple object replaces all of the   stack from the topmost markobject onward.  For example,\n\nStack before: ... markobject 1 2 3 'abc'\nStack after:  ... (1, 2, 3, 'abc')\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.TUPLE1","page":"OpCodes","title":"Pickle.OpCodes.TUPLE1","text":"Build a one-tuple out of the topmost item on the stack.\n\nThis code pops one value off the stack and pushes a tuple of   length 1 whose one item is that value back onto it.  In other   words:\n\n  stack[-1] = tuple(stack[-1:])\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.TUPLE2","page":"OpCodes","title":"Pickle.OpCodes.TUPLE2","text":"Build a two-tuple out of the top two items on the stack.\n\nThis code pops two values off the stack and pushes a tuple of   length 2 whose items are those values back onto it.  In other   words:\n\n  stack[-2:] = [tuple(stack[-2:])]\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.TUPLE3","page":"OpCodes","title":"Pickle.OpCodes.TUPLE3","text":"Build a three-tuple out of the top three items on the stack.\n\nThis code pops three values off the stack and pushes a tuple of   length 3 whose items are those values back onto it.  In other   words:\n\n  stack[-3:] = [tuple(stack[-3:])]\n\n\n\n\n\n","category":"constant"},{"location":"opcode/#Pickle.OpCodes.UNICODE","page":"OpCodes","title":"Pickle.OpCodes.UNICODE","text":"Push a Python Unicode string object.\n\nThe argument is a raw-unicode-escape encoding of a Unicode string,   and so may contain embedded escape sequences.  The argument extends   until the next newline character.\n\n\n\n\n\n","category":"constant"},{"location":"#Pickle.jl","page":"Home","title":"Pickle.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"serialization/deserialization with python pickle format","category":"page"},{"location":"#Outline","page":"Home","title":"Outline","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n  \"stack.md\",\n  \"opcode.md\",\n]\nDepth = 3","category":"page"}]
}
