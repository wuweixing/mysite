// For C/C++
SyntaxHighlighter.brushes.Cpp = function() {
    var datatypes = 'ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR ' +
                    'DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH ' +
                    'HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP ' +
                    'HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY ' +
                    'HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT ' +
                    'HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE ' +
                    'LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF ' +
                    'LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR ' +
                    'LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR ' +
                    'PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT ' +
                    'PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 ' +
                    'POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR ' +
                    'PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 ' +
                    'PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT ' +
                    'SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG ' +
                    'ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM ' +
                    'char bool short int __int32 __int64 __int8 __int16 long float double __wchar_t ' +
                    'clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS ' +
                    'FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t ' +
                    '__wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t ' +
                    'jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler ' +
                    'sig_atomic_t size_t _stat __stat64 _stati64 terminate_function ' +
                    'time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf ' +
                    'va_list wchar_t wctrans_t wctype_t wint_t signed';

    var keywords =  'break case catch class const __finally __exception __try ' +
                    'const_cast continue private public protected __declspec ' +
                    'default delete deprecated dllexport dllimport do dynamic_cast ' +
                    'else enum explicit extern if for friend goto inline ' +
                    'mutable naked namespace new noinline noreturn nothrow ' +
                    'register reinterpret_cast return selectany ' +
                    'sizeof static static_cast struct switch template this ' +
                    'thread throw true false try typedef typeid typename union ' +
                    'using uuid virtual void volatile whcar_t while';

    var functions = 'assert isalnum isalpha iscntrl isdigit isgraph islower isprint' +
                    'ispunct isspace isupper isxdigit tolower toupper errno localeconv ' +
                    'setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod ' +
                    'frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf ' +
                    'longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start ' +
                    'clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen ' +
                    'fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell ' +
                    'fwrite getc getchar gets perror printf putc putchar puts remove ' +
                    'rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam ' +
                    'ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol ' +
                    'bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs ' +
                    'mbtowc qsort rand realloc srand strtod strtol strtoul system ' +
                    'wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr ' +
                    'strcmp strcoll strcpy strcspn strerror strlen strncat strncmp ' +
                    'strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime ' +
                    'clock ctime difftime gmtime localtime mktime strftime time';

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLineCComments, css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.multiLineCComments, css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
        { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
        { regex: /^ *#.*/gm, css: 'preprocessor' },
        { regex: new RegExp(this.getKeywords(datatypes), 'gm'), css: 'color1 bold' },
        { regex: new RegExp(this.getKeywords(functions), 'gm'), css: 'functions bold' },
        { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword bold' }
    ];
};

SyntaxHighlighter.brushes.Cpp.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Cpp.aliases   = ['c', 'cpp'];


// For Lua
(function() {
    typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

    function Brush() {
        var keywords = 'and break do else elseif end false for function if in ' +
                       'local nil not or repeat return then true until while';

        var functions = '_G _VERSION assert collectgarbage dofile error getfenv ' +
                        'getmetatable ipairs load module next pairs pcall print ' +
                        ' rawequal rawget rawset require select setfenv setmetatable ' +
                        'tonumber tostring type unpack xpcall ' +
                        'coroutine.create coroutine.resume coroutine.running ' +
                        'coroutine.status coroutine.wrap coroutine.yield ' +
                        'debug.debug debug.getfenv debug.gethook debug.getinfo ' +
                        'debug.getlocal debug.getmetatable debug.getregistry ' +
                        'debug.getupvalue debug.setfenv debug.sethook debug.setlocal ' +
                        'debug.setmetatable debug.setupvalue debug.traceback ' +
                        'file:close file:flush file:lines file:read file:seek ' +
                        'file:setvbuf file:write' +
                        'io.close io.flush io.input io.lines io.open io.output ' +
                        'io.popen io.read io.stderr io.stdin io.stdout io.tmpfile ' +
                        'io.type io.write ' +
                        'math.abs math.acos math.asin math.atan math.atan2 math.ceil ' +
                        'math.cos math.cosh math.deg math.exp math.floor math.fmod ' +
                        'math.frexp math.huge math.ldexp math.log math.log10 math.max ' +
                        'math.min math.modf math.pi math.pow math.rad math.random ' +
                        'math.randomseed math.sin math.sinh math.sqrt math.tan math.tanh ' +
                        'os.clock os.date os.difftime os.execute os.exit os.getenv os.remove ' +
                        'os.rename os.setlocale os.time os.tmpname ' +
                        'package.cpath package.loaded package.loaders package.loadlib ' +
                        'package.path package.preload package.seeall ' +
                        'string.byte string.char string.dump string.find string.format ' +
                        'string.gmatch string.gsub string.len string.lower string.match ' +
                        'string.rep string.reverse string.sub string.upper table.concat ' +
                        'table.insert table.maxn table.remove table.sort';

        this.regexList = [
            { regex: /--.*/gm, css: 'comments' },
            { regex: /--\[\[[\S\s]*\]\]/gm, css: 'comments' },
            { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
            { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
            { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: 'string' },
            { regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString, css: 'string' },
            { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
            { regex: new RegExp(this.getKeywords(functions), 'gm'), css: 'functions' }
        ];
    }

    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases   = ['lua'];

    SyntaxHighlighter.brushes.Lua = Brush;
    typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();


// For PHP
SyntaxHighlighter.brushes.Php = function() {
    var funcs = 'abs acos acosh addcslashes addslashes ' +
        'array_change_key_case array_chunk array_combine array_count_values array_diff '+
        'array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill '+
        'array_filter array_flip array_intersect array_intersect_assoc array_intersect_key '+
        'array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map '+
        'array_merge array_merge_recursive array_multisort array_pad array_pop array_product '+
        'array_push array_rand array_reduce array_reverse array_search array_shift '+
        'array_slice array_splice array_sum array_udiff array_udiff_assoc '+
        'array_udiff_uassoc array_uintersect array_uintersect_assoc '+
        'array_uintersect_uassoc array_unique array_unshift array_values array_walk '+
        'array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert '+
        'basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress '+
        'bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir '+
        'checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists '+
        'closedir closelog copy cos cosh count count_chars date decbin dechex decoct '+
        'deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log '+
        'error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded '+
        'feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents '+
        'fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype '+
        'floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf '+
        'fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname '+
        'gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt '+
        'getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext '+
        'gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set '+
        'interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double '+
        'is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long '+
        'is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault '+
        'is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br '+
        'parse_ini_file parse_str parse_url passthru pathinfo readlink realpath rewind rewinddir rmdir '+
        'round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split '+
        'str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes '+
        'stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk '+
        'strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime '+
        'strtoupper strtr strval substr substr_compare';

    var keywords = 'and or xor array as break case ' +
        'cfunction class const continue declare default die do else ' +
        'elseif empty enddeclare endfor endforeach endif endswitch endwhile ' +
        'extends for foreach function include include_once global if ' +
        'new old_function return static switch use require require_once ' +
        'var while abstract interface public implements extends private protected throw';

    var constants = '__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__';

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLineCComments, css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.multiLineCComments, css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
        { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
        { regex: /\$\w+/g, css: 'variable' },
        { regex: new RegExp(this.getKeywords(funcs), 'gmi'), css: 'functions' },
        { regex: new RegExp(this.getKeywords(constants), 'gmi'), css: 'constants' },
        { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' }
    ];

    this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
};

SyntaxHighlighter.brushes.Php.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Php.aliases   = ['php'];


// For Python
SyntaxHighlighter.brushes.Python = function() {
    var keywords = 'and assert break class continue def del elif else ' +
                    'except exec finally for from global if import in is ' +
                    'lambda not or pass print raise return try yield while';

    var special = 'None True False self cls class_';

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },
        { regex: /^\s*@\w+/gm, css: 'decorator' },
        { regex: /(['\"]{3})([^\1])*?\1/gm, css: 'comments' },
        { regex: /"(?!")(?:\.|\\\"|[^\""\n])*"/gm, css: 'string' },
        { regex: /'(?!')(?:\.|(\\\')|[^\''\n])*'/gm, css: 'string' },
        { regex: /\+|\-|\*|\/|\%|=|==/gm, css: 'keyword' },
        { regex: /\b\d+\.?\w*/g, css: 'value' },
        { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
        { regex: new RegExp(this.getKeywords(special), 'gm'), css: 'color1' }
    ];

    this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};

SyntaxHighlighter.brushes.Python.prototype  = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Python.aliases    = ['python'];


// For Ruby
SyntaxHighlighter.brushes.Ruby = function() {
    var keywords = 'alias and BEGIN begin break case class def define_method defined do each else elsif ' +
        'END end ensure false for if in module new next nil not or raise redo rescue retry return ' +
        'self super then throw true undef unless until when while yield';

    var builtins = 'Array Bignum Binding Class Continuation Dir Exception FalseClass File::Stat File Fixnum Fload ' +
        'Hash Integer IO MatchData Method Module NilClass Numeric Object Proc Range Regexp String Struct::TMS Symbol ' +
        'ThreadGroup Thread Time TrueClass';

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
        { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
        { regex: /\b[A-Z0-9_]+\b/g, css: 'constants' },
        { regex: /:[a-z][A-Za-z0-9_]*/g, css: 'color2' },
        { regex: /(\$|@@|@)\w+/g, css: 'variable bold' },
        { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
        { regex: new RegExp(this.getKeywords(builtins), 'gm'), css: 'color1' }
    ];

    this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};

SyntaxHighlighter.brushes.Ruby.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Ruby.aliases   = ['ruby'];


// For CoffeeScript
SyntaxHighlighter.brushes.CoffeeScript = function() {
    var csKeywords, jsKeywords, keywords;
    jsKeywords = 'if else new return try catch finally throw break continue for in while delete instanceof typeof switch super extends class case default do function var void with const let debugger enum export import native __extends __hasProp';
    csKeywords = 'then unless and or is isnt not of by where when until';
    keywords   = jsKeywords + ' ' + csKeywords;

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },
        { regex: /\#\#\#[\s\S]*?\#\#\#/gm, css: 'comments'},
        { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: 'string'},
        { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string'},
        { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string'},
        { regex: /\'\'\'[\s\S]*?\'\'\'/gm, css: 'string'},
        { regex: /\/\/\/[\s\S]*?\/\/\//gm, css: 'string'},
        { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gmi, css: 'value'},
        { regex: /(@[\w._]*|this[\w._]*)/g, css: 'variable bold'},
        { regex: /(([\w._]+)::([\w._]*))/g, css: 'variable bold'},
        { regex: /([\w._]+)\s*(?=\=)/g, css: 'variable bold'},
        { regex: /(-&gt;|->|=&gt;|=>|===|==|=|>|&gt;|<|&lt;|\.\.\.|&&|&amp;&amp;|\|\||\!\!|\!|\+\+|\+|--|-|\[|\]|\(|\)|\{|\})|\?|\/|\*|\%/g, css: 'keyword'},
        { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword'}
    ];
    return;
};

SyntaxHighlighter.brushes.CoffeeScript.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.CoffeeScript.aliases   = ['coffee'];
