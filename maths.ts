/**
 * Created by aimdubs on 11/19/16.
 */
http://mathjs.org/

    $ mathjs                                 # Open a command prompt
$ mathjs script.txt                      # Run a script file, output to console
$ mathjs script1.txt script2.txt         # Run two script files
$ mathjs script.txt > results.txt        # Run a script file, output to file
$ cat script.txt | mathjs                # Run input stream, output to console
$ cat script.txt | mathjs > results.txt  # Run input stream, output to file

require.config({
    paths: {
        mathjs: 'path/to/mathjs',
    }
});
require(['mathjs'], function (math) {
    // use math.js
    math.sqrt(-4); // 2i
});

    $ ./bin/repl.js
> math.parse('1+1')
{ op: '+',
    fn: 'add',
    args:
    [ { value: '1', valueType: 'number' },
        { value: '1', valueType: 'number' } ] }
>
