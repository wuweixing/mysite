// For C
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
SyntaxHighlighter.brushes.Cpp.aliases   = ['c'];


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


// For Sass
(function () {
    typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

    function Brush () {
        function getKeywordsCSS (str) {
            return '\\b([a-z_]|)' + str.replace(/ /g, '(?=:)\\b|\\b([a-z_\\*]|\\*|)') + '(?=:)\\b';
        };

        function getValuesCSS (str) {
            return '\\b' + str.replace(/ /g, '(?!-)(?!:)\\b|\\b()') + '\:\\b';
        };

        var keywords = 'ascent azimuth background-attachment background-color background-image background-position ' +
                        'background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top ' +
                        'border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color ' +
                        'border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width ' +
                        'border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color ' +
                        'content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display ' +
                        'elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font ' +
                        'height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top ' +
                        'margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans ' +
                        'outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page ' +
                        'page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position ' +
                        'quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress ' +
                        'table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em ' +
                        'vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index';

        var values = 'above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder '+
                        'both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed '+
                        'continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero digits disc dotted double '+
                        'embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia '+
                        'gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic '+
                        'justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha '+
                        'lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower '+
                        'navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset '+
                        'outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side '+
                        'rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow '+
                        'small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize '+
                        'table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal '+
                        'text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin '+
                        'upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow';

        var fonts = '[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif';

        var statements = '!important !default';
        var preprocessor = '@import @extend @debug @warn @if @for @while @mixin @include';

        var r = SyntaxHighlighter.regexLib;

        this.regexList = [
            { regex: r.multiLineCComments, css: 'comments' },
            { regex: r.singleLineCComments, css: 'comments' },
            { regex: r.doubleQuotedString, css: 'string' },
            { regex: r.singleQuotedString, css: 'string' },
            { regex: /\#[a-fA-F0-9]{3,6}/g, css: 'value' },
            { regex: /\b(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)\b/g, css: 'value' },
            { regex: /\$\w+/g, css: 'variable' },
            { regex: new RegExp(this.getKeywords(statements), 'g'), css: 'color3' },
            { regex: new RegExp(this.getKeywords(preprocessor), 'g'), css: 'preprocessor' },
            { regex: new RegExp(getKeywordsCSS(keywords), 'gm'), css: 'keyword' },
            { regex: new RegExp(getValuesCSS(values), 'g'), css: 'value' },
            { regex: new RegExp(this.getKeywords(fonts), 'g'), css: 'color1' }
        ];
    };

    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases   = ['sass', 'scss'];

    SyntaxHighlighter.brushes.Sass = Brush;
    typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
