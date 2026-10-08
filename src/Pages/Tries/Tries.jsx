import React from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  Code2,
  GitBranch,
  Lightbulb,
  List,
  Network,
  Search,
  Target,
  TreePine,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const toc = [
  {
    id: "introduction",
    label: "Trie là gì?",
  },
  {
    id: "string-problem",
    label: "1. Vấn đề với String",
  },
  {
    id: "trie-definition",
    label: "2. Trie giải quyết gì?",
  },
  {
    id: "trie-structure",
    label: "3. Cấu trúc của Trie",
  },
  {
    id: "trie-node",
    label: "4. Trie Node",
  },
  {
    id: "root",
    label: "5. Root",
  },
  {
    id: "character-path",
    label: "6. Character và Path",
  },
  {
    id: "prefix",
    label: "7. Prefix là gì?",
  },
  {
    id: "end-word",
    label: "8. End of Word",
  },
  {
    id: "array-children",
    label: "9. children[26]",
  },
  {
    id: "create-node",
    label: "10. Tạo Trie Node bằng C",
  },
  {
    id: "insert-basic",
    label: "11. Insert Word",
  },
  {
    id: "search-basic",
    label: "12. Search Word",
  },
  {
    id: "starts-with",
    label: "13. StartsWith",
  },
  {
    id: "complexity",
    label: "14. Complexity",
  },
  {
    id: "advantages",
    label: "15. Ưu và nhược điểm",
  },
  {
    id: "applications",
    label: "16. Ứng dụng thực tế",
  },
  {
    id: "implement-problem",
    label: "17. Implement Trie",
  },
  {
    id: "implement-thinking",
    label: "18. Tư duy Implement Trie",
  },
  {
    id: "implement-dry-run",
    label: "19. Dry Run Implement Trie",
  },
  {
    id: "implement-code",
    label: "20. Code Implement Trie",
  },
  {
    id: "dictionary-problem",
    label: "21. Design Add and Search",
  },
  {
    id: "dictionary-thinking",
    label: "22. Tư duy Search với '.'",
  },
  {
    id: "dictionary-dry-run",
    label: "23. Dry Run Search",
  },
  {
    id: "dictionary-code",
    label: "24. Code Add and Search",
  },
  {
    id: "word-search-problem",
    label: "25. Word Search II",
  },
  {
    id: "word-search-thinking",
    label: "26. Trie + DFS + Backtracking",
  },
  {
    id: "word-search-dry-run",
    label: "27. Dry Run Word Search II",
  },
  {
    id: "word-search-code",
    label: "28. Code Word Search II",
  },
  {
    id: "edge-cases",
    label: "29. Edge Cases",
  },
  {
    id: "common-mistakes",
    label: "30. Lỗi thường gặp",
  },
  {
    id: "recognition",
    label: "31. Nhận diện Pattern",
  },
  {
    id: "summary",
    label: "32. Tổng kết",
  },
];

function CodeBlock({ code, label = "C" }) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-lg shadow-slate-200/30">
      {" "}
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
        {" "}
        <div className="flex items-center gap-2">
          {" "}
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />{" "}
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />{" "}
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />{" "}
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Code2 size={14} />
          {label}
        </div>
      </div>
      <div className="overflow-x-auto p-5">
        <pre className="font-mono text-[13px] leading-7 text-slate-300 sm:text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

function SectionTitle({ number, title, description }) {
  return (
    <div className="mb-8">
      {" "}
      <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
        {" "}
        <span>{number}</span> <span className="h-px w-8 bg-slate-200" />{" "}
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function InfoBox({ type = "info", title, children }) {
  const config = {
    info: {
      wrapper: "border-sky-200 bg-sky-50",
      icon: "bg-sky-100 text-sky-700",
      Icon: CircleAlert,
    },
    tip: {
      wrapper: "border-amber-200 bg-amber-50",
      icon: "bg-amber-100 text-amber-700",
      Icon: Lightbulb,
    },
    important: {
      wrapper: "border-violet-200 bg-violet-50",
      icon: "bg-violet-100 text-violet-700",
      Icon: Zap,
    },
  };

  const current = config[type];
  const Icon = current.Icon;

  return (
    <div className={`my-6 rounded-2xl border p-5 ${current.wrapper}`}>
      {" "}
      <div className="flex gap-4">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${current.icon}`}
        >
          {" "}
          <Icon size={17} />{" "}
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>

          <div className="mt-2 text-sm leading-7 text-slate-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function Complexity({ time, space, timeDescription, spaceDescription }) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      {" "}
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        {" "}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          {" "}
          <Clock3 size={15} />
          Time Complexity{" "}
        </div>
        <p className="mt-3 font-mono text-2xl font-bold text-slate-900">
          {time}
        </p>
        {timeDescription && (
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {timeDescription}
          </p>
        )}
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <Target size={15} />
          Space Complexity
        </div>

        <p className="mt-3 font-mono text-2xl font-bold text-slate-900">
          {space}
        </p>

        {spaceDescription && (
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {spaceDescription}
          </p>
        )}
      </div>
    </div>
  );
}

function StepCard({ number, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      {" "}
      <div className="flex gap-4">
        {" "}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 font-mono text-xs font-bold text-white">
          {number}{" "}
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-slate-900">{title}</h3>

          <div className="mt-2 text-sm leading-7 text-slate-600">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
function TriePath({ letters = [], terminalIndexes = [] }) {
  return (
    <div className="my-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex min-w-[620px] items-center justify-center gap-2">
        {letters.map((letter, index) => (
          <React.Fragment key={`${letter}-${index}`}>
            <div className="relative">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl border-2 font-mono text-lg font-bold ${
                  terminalIndexes.includes(index)
                    ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                    : "border-slate-200 bg-slate-50 text-slate-900"
                }`}
              >
                {letter}
              </div>

              {terminalIndexes.includes(index) && (
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                  word
                </span>
              )}
            </div>

            {/* Điều kiện hiển thị Mũi tên giữa các ký tự */}
            {index !== letters.length - 1 && (
              <ArrowRight size={18} className="shrink-0 text-slate-400" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function TrieStructureDiagram() {
  return (
    <div className="my-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6">
      {" "}
      <div className="mx-auto min-w-[620px] max-w-3xl">
        {" "}
        <div className="flex justify-center">
          {" "}
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-400 bg-slate-50 font-mono font-bold">
            root{" "}
          </div>{" "}
        </div>
        <div className="my-4 flex justify-center">
          <ArrowDown size={19} className="text-slate-400" />
        </div>
        <div className="flex justify-center gap-8 sm:gap-14">
          <div className="flex flex-col items-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-slate-300 bg-white font-mono font-bold">
              c
            </div>

            <div className="my-2">
              <ArrowDown size={17} className="text-slate-400" />
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-slate-300 bg-white font-mono font-bold">
              a
            </div>

            <div className="my-2">
              <ArrowDown size={17} className="text-slate-400" />
            </div>

            <div className="flex gap-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-emerald-300 bg-emerald-50 font-mono font-bold text-emerald-700">
                t
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-emerald-300 bg-emerald-50 font-mono font-bold text-emerald-700">
                r
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-slate-300 bg-white font-mono font-bold">
              d
            </div>

            <div className="my-2">
              <ArrowDown size={17} className="text-slate-400" />
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-slate-300 bg-white font-mono font-bold">
              o
            </div>

            <div className="my-2">
              <ArrowDown size={17} className="text-slate-400" />
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-emerald-300 bg-emerald-50 font-mono font-bold text-emerald-700">
              g
            </div>
          </div>
        </div>
        <p className="mt-7 text-center text-sm leading-6 text-slate-500">
          Những Node màu xanh là các Node đánh dấu kết thúc một từ hoàn chỉnh.
        </p>
      </div>
    </div>
  );
}

function PrefixDiagram() {
  return (
    <div className="my-8 grid gap-4 md:grid-cols-3">
      {[
        {
          prefix: "c",
          words: "cat, car, care",
          description: "Prefix chung.",
        },
        {
          prefix: "ca",
          words: "cat, car, care",
          description: "Prefix dài hơn.",
        },
        {
          prefix: "car",
          words: "car, care",
          description: "Vẫn còn là prefix.",
        },
      ].map((item) => (
        <div
          key={item.prefix}
          className="rounded-2xl border border-slate-200 bg-white p-5"
        >
          {" "}
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Prefix{" "}
          </div>
          <div className="mt-3 font-mono text-2xl font-bold text-slate-900">
            {item.prefix}
          </div>
          <p className="mt-2 font-mono text-sm text-slate-600">{item.words}</p>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function SearchState({ title, description, success }) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        success
          ? "border-emerald-200 bg-emerald-50"
          : "border-red-200 bg-red-50"
      }`}
    >
      {" "}
      <div className="flex items-start gap-4">
        {success ? (
          <CheckCircle2
            size={20}
            className="mt-0.5 shrink-0 text-emerald-600"
          />
        ) : (
          <X size={20} className="mt-0.5 shrink-0 text-red-500" />
        )}

        <div>
          <h3
            className={`font-semibold ${
              success ? "text-emerald-900" : "text-red-900"
            }`}
          >
            {title}
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

const trieNodeCode = `#include <stdbool.h>
#include <stdlib.h>

#define ALPHABET_SIZE 26

struct TrieNode {
struct TrieNode* children[ALPHABET_SIZE];
bool isEndOfWord;
};`;

const createNodeCode = `struct TrieNode* createNode() {
struct TrieNode* node =
malloc(sizeof(struct TrieNode));


if (node == NULL) {
    return NULL;
}

for (int i = 0; i < ALPHABET_SIZE; i++) {
    node->children[i] = NULL;
}

node->isEndOfWord = false;

return node;


}`;

const charIndexCode = `int charToIndex(char c) {
    return c - 'a';
}`;

const insertCode = `void insert(
struct TrieNode* root,
const char* word
) {
struct TrieNode* current = root;


for (int i = 0; word[i] != '\\0'; i++) {
    int index = word[i] - 'a';

    if (current->children[index] == NULL) {
        current->children[index] =
            createNode();
    }

    current =
        current->children[index];
}

current->isEndOfWord = true;


}`;

const searchCode = `bool search(
struct TrieNode* root,
const char* word
) {
struct TrieNode* current = root;


for (int i = 0; word[i] != '\\0'; i++) {
    int index = word[i] - 'a';

    if (current->children[index] == NULL) {
        return false;
    }

    current =
        current->children[index];
}

return current->isEndOfWord;


}`;

const startsWithCode = `bool startsWith(
struct TrieNode* root,
const char* prefix
) {
struct TrieNode* current = root;


for (int i = 0; prefix[i] != '\\0'; i++) {
    int index = prefix[i] - 'a';

    if (current->children[index] == NULL) {
        return false;
    }

    current =
        current->children[index];
}

return true;


}`;

const trieFullCode = `struct TrieNode* createNode() {
struct TrieNode* node =
malloc(sizeof(struct TrieNode));


if (node == NULL) {
    return NULL;
}

for (int i = 0; i < 26; i++) {
    node->children[i] = NULL;
}

node->isEndOfWord = false;

return node;


}

int charToIndex(char c) {
return c - 'a';
}

void insert(
struct TrieNode* root,
const char* word
) {
struct TrieNode* current = root;


for (int i = 0; word[i] != '\\0'; i++) {
    int index = charToIndex(word[i]);

    if (current->children[index] == NULL) {
        current->children[index] =
            createNode();
    }

    current = current->children[index];
}

current->isEndOfWord = true;


}

bool search(
struct TrieNode* root,
const char* word
) {
struct TrieNode* current = root;


for (int i = 0; word[i] != '\\0'; i++) {
    int index = charToIndex(word[i]);

    if (current->children[index] == NULL) {
        return false;
    }

    current = current->children[index];
}

return current->isEndOfWord;


}

bool startsWith(
struct TrieNode* root,
const char* prefix
) {
struct TrieNode* current = root;


for (int i = 0; prefix[i] != '\\0'; i++) {
    int index = charToIndex(prefix[i]);

    if (current->children[index] == NULL) {
        return false;
    }

    current = current->children[index];
}

return true;


}`;

const dictionaryNodeCode = `struct TrieNode {
    struct TrieNode* children[26];
    bool isEndOfWord;
};`;

const dictionarySearchCode = `bool searchWord(
struct TrieNode* node,
const char* word,
int index
) {
if (node == NULL) {
return false;
}


if (word[index] == '\\0') {
    return node->isEndOfWord;
}

char c = word[index];

if (c != '.') {
    int childIndex = c - 'a';

    return searchWord(
        node->children[childIndex],
        word,
        index + 1
    );
}

for (int i = 0; i < 26; i++) {
    if (
        node->children[i] != NULL &&
        searchWord(
            node->children[i],
            word,
            index + 1
        )
    ) {
        return true;
    }
}

return false;


}`;

const dictionaryFullCode = `void addWord(
struct TrieNode* root,
const char* word
) {
struct TrieNode* current = root;


for (int i = 0; word[i] != '\\0'; i++) {
    int index = word[i] - 'a';

    if (current->children[index] == NULL) {
        current->children[index] =
            createNode();
    }

    current =
        current->children[index];
}

current->isEndOfWord = true;


}

bool searchWord(
struct TrieNode* node,
const char* word,
int index
) {
if (node == NULL) {
return false;
}


if (word[index] == '\\0') {
    return node->isEndOfWord;
}

char c = word[index];

if (c != '.') {
    int childIndex = c - 'a';

    return searchWord(
        node->children[childIndex],
        word,
        index + 1
    );
}

for (int i = 0; i < 26; i++) {
    if (
        node->children[i] != NULL &&
        searchWord(
            node->children[i],
            word,
            index + 1
        )
    ) {
        return true;
    }
}

return false;


}`;

const wordSearchTrieCode = `struct TrieNode {
    struct TrieNode* children[26];
    char* word;
};`;

const wordSearchDfsCode = `void dfs(
char** board,
int rows,
int cols,
int r,
int c,
struct TrieNode* node,
char** result,
int* returnSize
) {
if (
r < 0 ||
r >= rows ||
c < 0 ||
c >= cols ||
board[r][c] == '#'
) {
return;
}


char ch = board[r][c];
int index = ch - 'a';

if (node->children[index] == NULL) {
    return;
}

struct TrieNode* next =
    node->children[index];

if (next->word != NULL) {
    result[*returnSize] =
        next->word;

    (*returnSize)++;

    next->word = NULL;
}

board[r][c] = '#';

dfs(
    board, rows, cols,
    r - 1, c,
    next, result, returnSize
);

dfs(
    board, rows, cols,
    r + 1, c,
    next, result, returnSize
);

dfs(
    board, rows, cols,
    r, c - 1,
    next, result, returnSize
);

dfs(
    board, rows, cols,
    r, c + 1,
    next, result, returnSize
);

board[r][c] = ch;


}`;

const wordSearchFullCode = `#include <stdbool.h>
#include <stdlib.h>

#define ALPHABET_SIZE 26

struct TrieNode {
struct TrieNode* children[ALPHABET_SIZE];
char* word;
};

struct TrieNode* createTrieNode() {
struct TrieNode* node =
malloc(sizeof(struct TrieNode));


if (node == NULL) {
    return NULL;
}

for (int i = 0; i < ALPHABET_SIZE; i++) {
    node->children[i] = NULL;
}

node->word = NULL;

return node;


}

void insertWord(
struct TrieNode* root,
char* word
) {
struct TrieNode* current = root;


for (int i = 0; word[i] != '\\0'; i++) {
    int index = word[i] - 'a';

    if (current->children[index] == NULL) {
        current->children[index] =
            createTrieNode();
    }

    current =
        current->children[index];
}

current->word = word;


}

void dfs(
char** board,
int rows,
int cols,
int r,
int c,
struct TrieNode* node,
char** result,
int* returnSize
) {
if (
r < 0 ||
r >= rows ||
c < 0 ||
c >= cols ||
board[r][c] == '#'
) {
return;
}


char ch = board[r][c];
int index = ch - 'a';

if (node->children[index] == NULL) {
    return;
}

struct TrieNode* next =
    node->children[index];

if (next->word != NULL) {
    result[*returnSize] =
        next->word;

    (*returnSize)++;

    next->word = NULL;
}

board[r][c] = '#';

dfs(
    board, rows, cols,
    r - 1, c,
    next, result, returnSize
);

dfs(
    board, rows, cols,
    r + 1, c,
    next, result, returnSize
);

dfs(
    board, rows, cols,
    r, c - 1,
    next, result, returnSize
);

dfs(
    board, rows, cols,
    r, c + 1,
    next, result, returnSize
);

board[r][c] = ch;


}

char** findWords(
char** board,
int boardSize,
int* boardColSize,
char** words,
int wordsSize,
int* returnSize
) {
struct TrieNode* root =
createTrieNode();


*returnSize = 0;

for (int i = 0; i < wordsSize; i++) {
    insertWord(root, words[i]);
}

char** result =
    malloc(sizeof(char*) * wordsSize);

for (int r = 0; r < boardSize; r++) {
    for (int c = 0; c < boardColSize[r]; c++) {
        dfs(
            board,
            boardSize,
            boardColSize[r],
            r,
            c,
            root,
            result,
            returnSize
        );
    }
}

return result;


}`;

export default function Tries() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      {/* Hero */}{" "}
      <section className="border-b border-slate-200 bg-white">
        {" "}
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {" "}
          <div className="max-w-4xl">
            {" "}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold tracking-wider text-slate-600">
              {" "}
              <TreePine size={14} />
              NEETCODE · TRIES{" "}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Tries
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Trie là một cấu trúc dữ liệu chuyên dùng cho{" "}
              <strong>String và Prefix</strong>. Bài này đi từ khái niệm Tree cơ
              bản đến cách Trie lưu từng ký tự, cách Insert, Search, StartsWith
              và cuối cùng là các bài NeetCode quan trọng.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <TreePine size={16} />
                Trie
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <GitBranch size={16} />
                Prefix
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Search size={16} />
                Search
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Network size={16} />
                DFS
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Code2 size={16} />C
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              <List size={14} />
              Nội dung
            </div>

            <nav className="max-h-[calc(100vh-130px)] space-y-1 overflow-y-auto pr-3">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs leading-5 text-slate-500 transition hover:bg-white hover:text-slate-900"
                >
                  <ChevronRight
                    size={12}
                    className="shrink-0 opacity-0 transition group-hover:opacity-100"
                  />

                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <main className="min-w-0">
          {/* Introduction */}
          <section id="introduction" className="scroll-mt-24">
            <SectionTitle
              number="00"
              title="Trie là gì?"
              description="Trie là một loại Tree được tối ưu cho việc lưu trữ và truy vấn chuỗi ký tự."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Nếu bạn đã học Tree, hãy tưởng tượng Trie là một{" "}
              <strong>Tree đặc biệt dành cho String</strong>.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Thay vì mỗi Node lưu một số nguyên như Binary Tree, mỗi Node trong
              Trie thường đại diện cho một <strong>ký tự</strong>.
            </p>

            <TrieStructureDiagram />

            <p className="text-sm leading-7 text-slate-600">
              Ví dụ Trie ở trên có thể lưu các từ:
            </p>

            <div className="my-5 flex flex-wrap gap-3">
              {["cat", "car", "dog"].map((word) => (
                <span
                  key={word}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-mono text-sm font-bold"
                >
                  {word}
                </span>
              ))}
            </div>

            <InfoBox type="important" title="Định nghĩa đơn giản nhất">
              <strong>
                Trie là một Tree trong đó đường đi từ Root xuống một Node có thể
                biểu diễn một Prefix hoặc một String.
              </strong>
              <br />
              <br />
              Trie đặc biệt hữu ích khi bài toán liên quan tới{" "}
              <strong>
                Prefix, dictionary, autocomplete hoặc search String
              </strong>
              .
            </InfoBox>

            <div className="my-6 grid gap-4 sm:grid-cols-3">
              {[
                ["String", "Lưu các từ hoặc chuỗi ký tự."],
                ["Prefix", "Dùng chung phần đầu của nhiều từ."],
                ["Search", "Đi theo từng ký tự thay vì quét toàn bộ từ."],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                    <GitBranch size={18} />
                  </div>

                  <h3 className="mt-4 font-semibold">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* String Problem */}
          <section id="string-problem" className="scroll-mt-24">
            <SectionTitle
              number="01"
              title="Vấn đề khi làm việc với String"
              description="Hiểu vấn đề trước thì Trie mới thực sự có ý nghĩa."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Giả sử bạn có một dictionary gồm hàng triệu từ:
            </p>

            <div className="my-6 grid gap-3 sm:grid-cols-2">
              {[
                "apple",
                "application",
                "apply",
                "app",
                "banana",
                "band",
                "bank",
              ].map((word) => (
                <div
                  key={word}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-mono text-sm"
                >
                  {word}
                </div>
              ))}
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Và người dùng nhập:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-xl font-bold text-white">
              app
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Chúng ta có thể kiểm tra từng String một. Nhưng khi cần rất nhiều
              thao tác như:
            </p>

            <div className="my-6 space-y-3">
              {[
                "Từ này có tồn tại không?",
                "Có từ nào bắt đầu bằng prefix này?",
                "Gợi ý các từ bắt đầu bằng 'app'?",
                "Có thể tạo thành từ nào từ các ký tự trên board?",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>

            <InfoBox type="tip" title="Điểm khó">
              Nếu nhiều String chia sẻ chung Prefix, việc lưu từng String độc
              lập sẽ khiến chúng ta lặp lại rất nhiều thông tin.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Trie Definition */}
          <section id="trie-definition" className="scroll-mt-24">
            <SectionTitle
              number="02"
              title="Trie giải quyết vấn đề gì?"
              description="Trie chia String thành các ký tự và dùng chung những Prefix giống nhau."
            />

            <p className="text-sm leading-7 text-slate-600">Giả sử ta có:</p>

            <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="space-y-3 font-mono text-sm">
                <div>cat</div>
                <div>car</div>
                <div>care</div>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Ba từ này đều bắt đầu bằng:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-lg text-white">
              c → a
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Trie chỉ lưu đoạn <strong>c → a</strong> một lần rồi chia nhánh
              thành các ký tự tiếp theo.
            </p>

            <TrieStructureDiagram />

            <InfoBox type="important" title="Ý tưởng cốt lõi">
              <strong>Trie tận dụng việc nhiều String có chung Prefix.</strong>
              <br />
              <br />
              Đây là điểm khác biệt quan trọng nhất giữa Trie và việc chỉ lưu
              một danh sách String thông thường.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Trie Structure */}
          <section id="trie-structure" className="scroll-mt-24">
            <SectionTitle
              number="03"
              title="Cấu trúc của Trie"
              description="Trie nhìn giống Tree, nhưng cách diễn giải Node lại đặc biệt hơn."
            />

            <p className="text-sm leading-7 text-slate-600">
              Một Trie thường gồm:
            </p>

            <div className="my-6 grid gap-4 md:grid-cols-3">
              {[
                ["Root", "Node bắt đầu của toàn bộ Trie."],
                ["Children", "Các cạnh đi tới ký tự tiếp theo."],
                ["End Of Word", "Đánh dấu nơi một từ hoàn chỉnh kết thúc."],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                    <GitBranch size={19} />
                  </div>

                  <h3 className="mt-4 text-lg font-bold">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-bold">
              Trie không lưu cả từ trên từng Node
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Node thường chỉ cần biết:
            </p>

            <div className="my-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 font-mono text-sm leading-8">
              children
              <br />
              isEndOfWord
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Chính đường đi từ Root qua các ký tự mới tạo nên String.
            </p>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Trie Node */}
          <section id="trie-node" className="scroll-mt-24">
            <SectionTitle
              number="04"
              title="Trie Node"
              description="Đây là viên gạch nhỏ nhất của Trie."
            />

            <p className="text-sm leading-7 text-slate-600">
              Một Node của Trie với alphabet tiếng Anh thường có:
            </p>

            <div className="my-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  children
                </div>

                <p className="mt-3 font-mono text-2xl font-bold text-sky-800">
                  [26]
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Pointer tới Node của các ký tự tiếp theo.
                </p>
              </div>

              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-violet-600">
                  isEndOfWord
                </div>

                <p className="mt-3 font-mono text-2xl font-bold text-violet-800">
                  true / false
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Cho biết từ có kết thúc tại Node này hay không.
                </p>
              </div>
            </div>

            <CodeBlock code={trieNodeCode} />

            <InfoBox type="important" title="Tại sao cần isEndOfWord?">
              Hãy xét hai từ:
              <br />
              <br />
              <strong>app</strong>
              <br />
              <strong>apple</strong>
              <br />
              <br />
              Khi đi tới Node p thứ hai, chúng ta đã đi hết "app", nhưng Trie
              vẫn còn có thể đi tiếp tới "apple".
              <br />
              <br />
              Vì vậy phải có một flag để phân biệt{" "}
              <strong>"đây là prefix"</strong> và{" "}
              <strong>"đây là một word hoàn chỉnh"</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Root */}
          <section id="root" className="scroll-mt-24">
            <SectionTitle
              number="05"
              title="Root"
              description="Root là Node đặc biệt ở đầu Trie."
            />

            <p className="text-sm leading-7 text-slate-600">
              Root thường <strong>không đại diện cho một ký tự cụ thể</strong>.
            </p>

            <div className="my-7 flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-400 bg-slate-50 font-mono text-xs font-bold">
                root
              </div>

              <ArrowDown size={19} className="my-3 text-slate-400" />

              <div className="flex gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 bg-white font-mono font-bold">
                  a
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 bg-white font-mono font-bold">
                  b
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 bg-white font-mono font-bold">
                  c
                </div>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Khi Insert từ <code>cat</code>, chúng ta bắt đầu từ Root rồi đi:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-base text-white">
              root → c → a → t
            </div>

            <InfoBox type="tip" title="Mental model">
              Root giống như <strong>điểm xuất phát</strong>. Ký tự đầu tiên của
              mỗi từ nằm ở các Child của Root.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Character Path */}
          <section id="character-path" className="scroll-mt-24">
            <SectionTitle
              number="06"
              title="Character và Path"
              description="Một String trong Trie được tạo ra bởi một đường đi qua các ký tự."
            />

            <p className="text-sm leading-7 text-slate-600">Với từ:</p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-xl font-bold text-white">
              cat
            </div>

            <TriePath letters={["c", "a", "t"]} terminalIndexes={[2]} />

            <p className="text-sm leading-7 text-slate-600">
              Đường:
              <strong className="ml-2 font-mono">root → c → a → t</strong>
              chính là representation của String "cat".
            </p>

            <h3 className="mt-8 text-xl font-bold">Nếu có "car" thì sao?</h3>

            <TriePath letters={["c", "a", "r"]} terminalIndexes={[2]} />

            <p className="text-sm leading-7 text-slate-600">
              Hai từ dùng chung đường <strong>c → a</strong> rồi mới tách nhánh.
            </p>

            <InfoBox type="important" title="Prefix Sharing">
              Đây chính là sức mạnh của Trie:
              <br />
              <br />
              <strong>cat</strong> và <strong>car</strong> không cần lưu riêng
              toàn bộ "ca" hai lần trong cấu trúc Trie.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Prefix */}
          <section id="prefix" className="scroll-mt-24">
            <SectionTitle
              number="07"
              title="Prefix là gì?"
              description="Prefix là phần đầu của một String."
            />

            <p className="text-sm leading-7 text-slate-600">Với:</p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-xl font-bold text-white">
              application
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Những Prefix hợp lệ gồm:
            </p>

            <div className="my-5 flex flex-wrap gap-3">
              {["a", "ap", "app", "appl", "appli", "applic"].map((prefix) => (
                <span
                  key={prefix}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-mono text-sm"
                >
                  {prefix}
                </span>
              ))}
            </div>

            <PrefixDiagram />

            <InfoBox type="tip" title="Tại sao Prefix quan trọng?">
              Các bài toán như autocomplete, search suggestion hoặc kiểm tra "có
              từ nào bắt đầu bằng chuỗi này không?" đều phụ thuộc mạnh vào
              Prefix.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* End of Word */}
          <section id="end-word" className="scroll-mt-24">
            <SectionTitle
              number="08"
              title="End of Word"
              description="isEndOfWord là phần khiến Trie phân biệt Word và Prefix."
            />

            <p className="text-sm leading-7 text-slate-600">Giả sử Trie lưu:</p>

            <div className="my-5 space-y-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 font-mono">
                app
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 font-mono">
                apple
              </div>
            </div>

            <TriePath
              letters={["a", "p", "p", "l", "e"]}
              terminalIndexes={[2, 4]}
            />

            <p className="text-sm leading-7 text-slate-600">
              Node "p" thứ hai có <code>isEndOfWord = true</code> vì "app" là
              một từ hoàn chỉnh.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Node "e" cuối cùng cũng có <code>isEndOfWord = true</code> vì
              "apple" là một từ hoàn chỉnh.
            </p>

            <InfoBox type="important" title="Prefix không đồng nghĩa với Word">
              "app" có thể là Prefix của "apple".
              <br />
              <br />
              Nhưng "app" chỉ được xem là một Word nếu Node cuối của "app" có
              <strong> isEndOfWord = true</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Children 26 */}
          <section id="array-children" className="scroll-mt-24">
            <SectionTitle
              number="09"
              title="children[26] hoạt động như thế nào?"
              description="Đây là phần quan trọng nhất khi tự implement Trie bằng C."
            />

            <p className="text-sm leading-7 text-slate-600">
              Nếu chúng ta giả sử chỉ hỗ trợ chữ cái:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-base text-white">
              a → 0<span className="mx-3 text-slate-500">|</span>b → 1
              <span className="mx-3 text-slate-500">|</span>c → 2
              <span className="mx-3 text-slate-500">|</span>
              ...
              <span className="mx-3 text-slate-500">|</span>z → 25
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Ta có thể tính index:
            </p>

            <CodeBlock code={charIndexCode} />

            <h3 className="mt-8 text-xl font-bold">
              Vì sao dùng Array 26 phần tử?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Vì alphabet tiếng Anh chỉ có 26 ký tự. Node có thể trực tiếp đi
              tới Child tương ứng mà không cần tìm kiếm trong một List.
            </p>

            <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5 font-mono text-sm leading-8">
              children[0] → a
              <br />
              children[1] → b
              <br />
              children[2] → c
              <br />
              ...
              <br />
              children[25] → z
            </div>

            <InfoBox type="tip" title="Trade-off">
              Array 26 giúp truy cập Child rất nhanh nhưng có thể tốn nhiều
              memory hơn nếu Trie thưa.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Create Node */}
          <section id="create-node" className="scroll-mt-24">
            <SectionTitle
              number="10"
              title="Tạo Trie Node bằng C"
              description="Bây giờ chúng ta bắt đầu xây dựng Trie thật sự."
            />

            <CodeBlock code={createNodeCode} />

            <h3 className="mt-8 text-xl font-bold">
              Tại sao phải khởi tạo toàn bộ children = NULL?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Một Node mới chưa có Child nào. Nếu không đặt các pointer về NULL,
              chúng có thể chứa giá trị rác.
            </p>

            <div className="my-6 grid gap-4 sm:grid-cols-2">
              <SearchState
                success
                title="Đúng"
                description="children[i] = NULL nghĩa là chưa có Edge tới ký tự đó."
              />

              <SearchState
                title="Sai"
                description="Pointer rác có thể dẫn tới vùng nhớ không hợp lệ."
              />
            </div>

            <InfoBox type="important" title="Root cũng là Trie Node">
              Root được tạo bằng cùng một hàm createNode(). Điểm khác chỉ là
              Root thường không đại diện cho một ký tự.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Insert Basic */}
          <section id="insert-basic" className="scroll-mt-24">
            <SectionTitle
              number="11"
              title="Insert Word"
              description="Insert một String nghĩa là tạo đường đi qua từng ký tự."
            />

            <p className="text-sm leading-7 text-slate-600">Hãy Insert:</p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-xl font-bold text-white">
              cat
            </div>

            <div className="space-y-4">
              <StepCard number="01" title="Bắt đầu tại Root">
                <code>current = root</code>.
              </StepCard>

              <StepCard number="02" title="Đọc ký tự c">
                Tìm <code>children['c' - 'a']</code>. Nếu chưa có, tạo Node.
              </StepCard>

              <StepCard number="03" title="Đi tới Node c">
                <code>current</code> trở thành Node đại diện cho "c".
              </StepCard>

              <StepCard number="04" title="Đọc ký tự a">
                Tạo hoặc lấy Child "a".
              </StepCard>

              <StepCard number="05" title="Đọc ký tự t">
                Tạo hoặc lấy Child "t".
              </StepCard>

              <StepCard number="06" title="Đánh dấu kết thúc">
                Đặt <code>isEndOfWord = true</code> tại Node "t".
              </StepCard>
            </div>

            <CodeBlock code={insertCode} />

            <InfoBox type="tip" title="Insert không tạo Node thừa">
              Nếu Prefix đã tồn tại, chúng ta tái sử dụng Node cũ.
              <br />
              <br />
              Insert "car" sau "cat" sẽ tái sử dụng "c" và "a", chỉ cần tạo
              nhánh "r".
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Search Basic */}
          <section id="search-basic" className="scroll-mt-24">
            <SectionTitle
              number="12"
              title="Search Word"
              description="Search một từ = đi qua Trie theo từng ký tự và kiểm tra End of Word."
            />

            <p className="text-sm leading-7 text-slate-600">Với:</p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-lg text-white">
              search("cat")
            </div>

            <div className="space-y-4">
              <StepCard number="01" title="c">
                Node "c" tồn tại → tiếp tục.
              </StepCard>

              <StepCard number="02" title="a">
                Node "a" tồn tại → tiếp tục.
              </StepCard>

              <StepCard number="03" title="t">
                Node "t" tồn tại → tiếp tục.
              </StepCard>

              <StepCard number="04" title="End of Word">
                Kiểm tra <code>isEndOfWord</code>. Nếu true → tìm thấy Word.
              </StepCard>
            </div>

            <CodeBlock code={searchCode} />

            <h3 className="mt-8 text-xl font-bold">
              Tại sao không chỉ return true khi đi hết String?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Vì String chúng ta đang tìm có thể chỉ là Prefix của một từ dài
              hơn.
            </p>

            <div className="my-6 grid gap-4 sm:grid-cols-2">
              <SearchState
                success
                title='search("app")'
                description='Đúng nếu Node "p" cuối có isEndOfWord = true.'
              />

              <SearchState
                title='search("appl")'
                description='Sai nếu "appl" chỉ là Prefix và không phải một Word hoàn chỉnh.'
              />
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Starts With */}
          <section id="starts-with" className="scroll-mt-24">
            <SectionTitle
              number="13"
              title="StartsWith"
              description="StartsWith chỉ cần biết Prefix có tồn tại, không cần Prefix đó là một Word hoàn chỉnh."
            />

            <p className="text-sm leading-7 text-slate-600">Ví dụ Trie chứa:</p>

            <div className="my-5 flex flex-wrap gap-3">
              {["app", "apple", "application"].map((word) => (
                <span
                  key={word}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-mono text-sm"
                >
                  {word}
                </span>
              ))}
            </div>

            <p className="text-sm leading-7 text-slate-600">Khi:</p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-lg text-white">
              startsWith("appl")
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Chỉ cần đi được tới Node "l" là đủ. Không cần kiểm tra{" "}
              <code>isEndOfWord</code>.
            </p>

            <CodeBlock code={startsWithCode} />

            <InfoBox type="important" title="Search vs StartsWith">
              <strong>Search:</strong> phải tìm thấy cả Word.
              <br />
              <br />
              <strong>StartsWith:</strong> chỉ cần tìm thấy Prefix.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Complexity */}
          <section id="complexity" className="scroll-mt-24">
            <SectionTitle
              number="14"
              title="Complexity của Trie"
              description="Trie thường phân tích theo độ dài String thay vì số lượng String."
            />

            <p className="text-sm leading-7 text-slate-600">
              Gọi <code>L</code> là độ dài String đang xử lý.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[760px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Operation
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Time
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Lý do
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["Insert", "O(L)", "Đi qua từng ký tự."],
                    ["Search", "O(L)", "Đi qua từng ký tự."],
                    ["StartsWith", "O(L)", "Đi qua Prefix."],
                  ].map(([operation, complexity, reason]) => (
                    <tr key={operation}>
                      <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                        {operation}
                      </td>

                      <td className="border-b border-slate-100 px-5 py-4 font-mono">
                        {complexity}
                      </td>

                      <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                        {reason}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-8 text-xl font-bold">Space Complexity</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Nếu tổng số ký tự của tất cả String là <code>N</code>, số Node của
              Trie tối đa có thể lên tới O(N).
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Với alphabet cố định 26:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-lg font-bold text-white">
              O(N × 26)
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Về mặt Big-O theo alphabet là hằng số, thường ghi gọn là{" "}
              <strong>O(N)</strong>.
            </p>

            <InfoBox type="tip" title="Điểm mạnh của Trie">
              Khi String rất dài hoặc số lượng String rất lớn nhưng chúng chia
              sẻ nhiều Prefix, Trie có thể rất hiệu quả.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Advantages */}
          <section id="advantages" className="scroll-mt-24">
            <SectionTitle
              number="15"
              title="Ưu và nhược điểm của Trie"
              description="Không phải bài String nào cũng nên dùng Trie."
            />

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex items-center gap-2 font-semibold text-emerald-900">
                  <Check size={19} />
                  Ưu điểm
                </div>

                <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                  <div>Search theo độ dài String.</div>
                  <div>Prefix query rất tự nhiên.</div>
                  <div>Dùng chung Prefix của nhiều từ.</div>
                  <div>Rất phù hợp với autocomplete.</div>
                </div>
              </div>

              <div className="rounded-3xl border border-red-200 bg-red-50 p-6">
                <div className="flex items-center gap-2 font-semibold text-red-900">
                  <X size={19} />
                  Nhược điểm
                </div>

                <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                  <div>Tốn memory hơn Hash Table trong nhiều trường hợp.</div>
                  <div>Code phức tạp hơn Set / HashSet.</div>
                  <div>Alphabet lớn khiến mỗi Node tốn nhiều memory.</div>
                  <div>Không phải bài String nào cũng cần Trie.</div>
                </div>
              </div>
            </div>

            <InfoBox
              type="important"
              title="Trie không phải HashMap phiên bản đẹp hơn"
            >
              Hai cấu trúc giải quyết các trade-off khác nhau.
              <br />
              <br />
              Hash Table mạnh ở việc kiểm tra một Key cụ thể.
              <br />
              Trie đặc biệt mạnh khi cần{" "}
              <strong>quan hệ giữa các Prefix</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Applications */}
          <section id="applications" className="scroll-mt-24">
            <SectionTitle
              number="16"
              title="Ứng dụng thực tế"
              description="Trie không chỉ là một cấu trúc để giải bài LeetCode."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {[
                [
                  "Autocomplete",
                  "Nhập 'app' rồi gợi ý apple, application, apply.",
                ],
                [
                  "Search Suggestion",
                  "Lấy các từ cùng Prefix để hiển thị kết quả.",
                ],
                ["Dictionary", "Kiểm tra nhanh từ có tồn tại hay không."],
                ["Spell Checking", "Đối chiếu từ nhập vào với Dictionary."],
                ["IP Routing", "Trie có biến thể dùng cho Prefix của địa chỉ."],
                [
                  "Word Search",
                  "Kết hợp Trie với DFS để tìm nhiều từ trên board.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-center gap-3">
                    <Network size={18} className="text-slate-500" />
                    <h3 className="font-semibold">{title}</h3>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Implement Trie */}
          <section id="implement-problem" className="scroll-mt-24">
            <SectionTitle
              number="17"
              title="NeetCode — Implement Trie"
              description="Bài nền tảng để hiểu toàn bộ cấu trúc Trie."
            />

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Problem
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                Implement Trie (Prefix Tree)
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Xây dựng Trie hỗ trợ ba thao tác:
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-xl bg-slate-50 p-4 font-mono text-sm">
                  insert(word)
                </div>

                <div className="rounded-xl bg-slate-50 p-4 font-mono text-sm">
                  search(word)
                </div>

                <div className="rounded-xl bg-slate-50 p-4 font-mono text-sm">
                  startsWith(prefix)
                </div>
              </div>
            </div>

            <InfoBox type="important" title="Đây là bài nền móng">
              Nếu hiểu rõ bài này, hai bài Trie sau sẽ dễ hơn rất nhiều vì cả
              hai đều xây trên ý tưởng:
              <br />
              <strong>Node → children → path → end of word</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Implement Thinking */}
          <section id="implement-thinking" className="scroll-mt-24">
            <SectionTitle
              number="18"
              title="Tư duy Implement Trie"
              description="Hãy xây dựng Trie bằng tay trước khi viết code."
            />

            <div className="space-y-4">
              <StepCard number="01" title="Tạo Root">
                Root là Node rỗng làm điểm bắt đầu.
              </StepCard>

              <StepCard number="02" title="Insert">
                Với mỗi ký tự, đi vào Child tương ứng. Nếu chưa có thì tạo Node
                mới.
              </StepCard>

              <StepCard number="03" title="Mark Word">
                Khi tới cuối String, đặt <code>isEndOfWord = true</code>.
              </StepCard>

              <StepCard number="04" title="Search">
                Đi theo đúng từng ký tự. Nếu thiếu Child → false.
              </StepCard>

              <StepCard number="05" title="Check End">
                Đi hết String chưa đủ. Phải kiểm tra Node cuối có phải End of
                Word hay không.
              </StepCard>
            </div>

            <TriePath letters={["c", "a", "t"]} terminalIndexes={[2]} />

            <InfoBox type="tip" title="Mental model">
              Insert giống như <strong>vẽ đường</strong>.
              <br />
              <br />
              Search giống như <strong>đi lại đúng con đường đó</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Implement Dry Run */}
          <section id="implement-dry-run" className="scroll-mt-24">
            <SectionTitle
              number="19"
              title="Dry Run Implement Trie"
              description="Insert cat rồi search cat và cap."
            />

            <div className="space-y-5">
              <StepCard number="01" title='Insert "cat"'>
                root → c → a → t.
                <br />
                Node t được đánh dấu End of Word.
              </StepCard>

              <StepCard number="02" title='Search "cat"'>
                c tồn tại → a tồn tại → t tồn tại → End = true.
                <br />
                Kết quả = true.
              </StepCard>

              <StepCard number="03" title='Search "cap"'>
                c tồn tại → a tồn tại → p không tồn tại.
                <br />
                Kết quả = false.
              </StepCard>

              <StepCard number="04" title='Search prefix "ca"'>
                c tồn tại → a tồn tại.
                <br />
                StartsWith = true.
              </StepCard>

              <StepCard number="05" title='Search "ca"'>
                c tồn tại → a tồn tại nhưng Node a không phải End of Word.
                <br />
                Search = false nếu chỉ lưu "cat".
              </StepCard>
            </div>

            <div className="my-7 grid gap-4 md:grid-cols-3">
              <SearchState
                success
                title='search("cat")'
                description="Word tồn tại."
              />

              <SearchState title='search("cap")' description="Thiếu Node p." />

              <SearchState
                success
                title='startsWith("ca")'
                description="Prefix tồn tại."
              />
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Implement Code */}
          <section id="implement-code" className="scroll-mt-24">
            <SectionTitle
              number="20"
              title="Code Implement Trie"
              description="Một implementation C đầy đủ cho Insert, Search và StartsWith."
            />

            <CodeBlock code={trieFullCode} />

            <Complexity
              time="O(L)"
              space="O(N)"
              timeDescription="L là độ dài word/prefix."
              spaceDescription="N là tổng số ký tự có thể tạo thành các Node."
            />

            <InfoBox type="important" title="Phần quan trọng nhất trong code">
              Hầu hết logic nằm ở việc:
              <br />
              <br />
              <strong>
                tính index → kiểm tra child → tạo Node nếu thiếu → di chuyển
              </strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Dictionary Problem */}
          <section id="dictionary-problem" className="scroll-mt-24">
            <SectionTitle
              number="21"
              title="NeetCode — Design Add and Search Words Data Structure"
              description="Bài này thêm một thử thách: ký tự '.' có thể đại diện cho bất kỳ ký tự nào."
            />

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Problem
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                Design Add and Search Words Data Structure
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Data structure cần hỗ trợ:
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl bg-slate-50 p-4 font-mono text-sm">
                  addWord("bad")
                </div>

                <div className="rounded-xl bg-slate-50 p-4 font-mono text-sm">
                  addWord("dad")
                </div>

                <div className="rounded-xl bg-slate-50 p-4 font-mono text-sm">
                  search(".ad")
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Ký tự <code>.</code> có thể match bất kỳ ký tự nào.
              </p>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Dictionary Thinking */}
          <section id="dictionary-thinking" className="scroll-mt-24">
            <SectionTitle
              number="22"
              title="Tư duy Search với '.'"
              description="Điểm mới của bài này là Search không còn luôn đi đúng một nhánh."
            />

            <p className="text-sm leading-7 text-slate-600">Với:</p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-xl font-bold text-white">
              .ad
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Ký tự đầu tiên là "." nên chúng ta không biết sẽ đi vào Child nào.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Vì vậy phải thử:
            </p>

            <div className="my-6 grid gap-4 sm:grid-cols-3">
              {["bad", "dad", "mad"].map((word) => (
                <div
                  key={word}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center"
                >
                  <div className="font-mono text-xl font-bold">{word}</div>

                  <p className="mt-2 text-sm text-slate-500">
                    Có thể match ".ad".
                  </p>
                </div>
              ))}
            </div>

            <InfoBox type="important" title="Đây là lúc Trie + DFS xuất hiện">
              Khi gặp "." chúng ta phải thử nhiều Child.
              <br />
              <br />
              Vì vậy Search trở thành một bài{" "}
              <strong>backtracking / DFS trên Trie</strong>.
            </InfoBox>

            <div className="my-7 space-y-4">
              <StepCard number="01" title="Ký tự bình thường">
                Chỉ có một Child hợp lệ → đi thẳng xuống.
              </StepCard>

              <StepCard number="02" title="Gặp '.'">
                Có thể đi vào bất kỳ Child nào đang tồn tại.
              </StepCard>

              <StepCard number="03" title="Thử từng nhánh">
                Nếu một nhánh trả về true thì toàn bộ Search thành công.
              </StepCard>

              <StepCard number="04" title="Không nhánh nào thành công">
                Trả về false.
              </StepCard>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Dictionary Dry Run */}
          <section id="dictionary-dry-run" className="scroll-mt-24">
            <SectionTitle
              number="23"
              title="Dry Run Search"
              description="Giả sử Trie chứa bad, dad và mad."
            />

            <div className="space-y-5">
              <StepCard number="01" title='search(".ad")'>
                Ký tự đầu tiên là "." → thử tất cả Child có tồn tại.
              </StepCard>

              <StepCard number="02" title="Thử b">
                b → a → d → End of Word = true.
              </StepCard>

              <StepCard number="03" title="Return">
                Không cần thử d hoặc m nữa vì đã có một nhánh match.
              </StepCard>
            </div>

            <div className="my-7 rounded-3xl bg-slate-950 p-6 font-mono text-sm leading-8 text-white">
              "." → thử b
              <br />
              b → a
              <br />
              a → d
              <br />
              d → End
              <br />
              <br />
              true
            </div>

            <InfoBox type="tip" title="Nếu nhánh đầu tiên fail">
              Ví dụ "bad" không tồn tại nhưng "dad" tồn tại, recursion sẽ quay
              lại và thử Child tiếp theo.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Dictionary Code */}
          <section id="dictionary-code" className="scroll-mt-24">
            <SectionTitle
              number="24"
              title="Code Add and Search"
              description="Search thường dùng recursion vì ký tự '.' có thể tạo nhiều nhánh."
            />

            <CodeBlock code={dictionaryNodeCode} />

            <CodeBlock
              code={dictionarySearchCode}
              label="C · Recursive Search"
            />

            <CodeBlock code={dictionaryFullCode} label="C · Full Example" />

            <Complexity
              time="O(L)"
              space="O(L)"
              timeDescription="Khi không có wildcard, Search đi theo một path."
              spaceDescription="Recursion stack sâu tối đa bằng độ dài word."
            />

            <InfoBox type="important" title="Wildcard làm complexity thay đổi">
              Với ký tự thông thường, mỗi bước chỉ có một lựa chọn.
              <br />
              <br />
              Với ".", có thể phải thử tới 26 nhánh. Worst case có thể tăng mạnh
              theo số lượng wildcard.
            </InfoBox>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-lg text-white">
              Worst Case ≈ O(26^L)
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Word Search II */}
          <section id="word-search-problem" className="scroll-mt-24">
            <SectionTitle
              number="25"
              title="NeetCode — Word Search II"
              description="Đây là bài khó nhất trong nhóm Trie: kết hợp Trie, DFS và Backtracking."
            />

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Problem
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                Word Search II
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Cho một board ký tự và một danh sách từ. Tìm tất cả các từ có
                thể tạo thành trên board.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Mỗi bước chỉ được đi sang ô kề nhau theo bốn hướng và không được
                dùng cùng một ô hai lần trong cùng một từ.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="mx-auto grid min-w-[250px] max-w-xs grid-cols-4 gap-2">
                  {[
                    "o",
                    "a",
                    "a",
                    "n",
                    "e",
                    "t",
                    "a",
                    "e",
                    "i",
                    "h",
                    "k",
                    "r",
                    "i",
                    "f",
                    "l",
                    "v",
                  ].map((char, index) => (
                    <div
                      key={`${char}-${index}`}
                      className="flex aspect-square items-center justify-center rounded-xl border border-slate-200 bg-white font-mono text-lg font-bold"
                    >
                      {char}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <InfoBox type="important" title="Vì sao Trie hữu ích ở đây?">
              Nếu có hàng nghìn từ, chúng ta không muốn DFS độc lập cho từng từ.
              Trie cho phép chúng ta kiểm tra Prefix ngay trong quá trình DFS.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Word Search Thinking */}
          <section id="word-search-thinking" className="scroll-mt-24">
            <SectionTitle
              number="26"
              title="Trie + DFS + Backtracking"
              description="Đây là pattern quan trọng nhất cần rút ra từ Word Search II."
            />

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <TreePine size={19} />
                </div>

                <h3 className="mt-4 font-bold">Trie</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Biết Prefix nào còn khả thi.
                </p>
              </div>

              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <Network size={19} />
                </div>

                <h3 className="mt-4 font-bold">DFS</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Đi thử các ô lân cận.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <RotateBackIcon />
                </div>

                <h3 className="mt-4 font-bold">Backtracking</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Đánh dấu ô đã dùng rồi hoàn tác khi quay lại.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm leading-7 text-slate-600">Tại mỗi ô:</p>

            <div className="my-6 space-y-4">
              <StepCard number="01" title="Đọc ký tự">
                Ví dụ ô hiện tại là "o".
              </StepCard>

              <StepCard number="02" title="Đi vào Trie">
                Nếu Trie không có child "o" → dừng ngay.
              </StepCard>

              <StepCard number="03" title="Có Prefix">
                Nếu Trie có "o" → tiếp tục DFS các ô lân cận.
              </StepCard>

              <StepCard number="04" title="Tìm được Word">
                Nếu Node Trie có thông tin End of Word → đưa Word vào kết quả.
              </StepCard>

              <StepCard number="05" title="Backtrack">
                Đánh dấu ô lại như cũ để những đường đi khác có thể sử dụng nó.
              </StepCard>
            </div>

            <InfoBox type="tip" title="Pruning">
              Trie cho phép cắt nhánh rất sớm.
              <br />
              <br />
              Nếu Prefix hiện tại không tồn tại trong Trie, không cần DFS sâu
              hơn nữa.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Word Search Dry Run */}
          <section id="word-search-dry-run" className="scroll-mt-24">
            <SectionTitle
              number="27"
              title="Dry Run Word Search II"
              description="Hãy nhìn bài toán như một cây tìm kiếm kết hợp với Trie."
            />

            <div className="space-y-5">
              <StepCard number="01" title="Chọn ô bắt đầu">
                DFS bắt đầu từ một ô bất kỳ trên board.
              </StepCard>

              <StepCard number="02" title="Kiểm tra Trie">
                Nếu ký tự không xuất hiện ở vị trí hiện tại của Trie → stop.
              </StepCard>

              <StepCard number="03" title="Đi tiếp">
                Nếu Prefix tồn tại, thử bốn ô hàng xóm.
              </StepCard>

              <StepCard number="04" title="Tìm thấy Word">
                Node hiện tại có <code>word</code> → thêm vào result.
              </StepCard>

              <StepCard number="05" title="Không đi được nữa">
                Restore board rồi quay lại Node trước.
              </StepCard>
            </div>

            <div className="my-7 rounded-3xl bg-slate-950 p-6 font-mono text-sm leading-8 text-white">
              Board cell
              <br />
              ↓
              <br />
              Trie child
              <br />
              ↓
              <br />
              Prefix hợp lệ?
              <br />
              ↓
              <br />
              DFS 4 hướng
              <br />
              ↓
              <br />
              Word?
            </div>

            <InfoBox type="important" title="Điểm hay nhất">
              Không phải chỉ có DFS trên Board.
              <br />
              <br />
              Ta đang chạy DFS trên Board{" "}
              <strong>đồng thời di chuyển trong Trie</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Word Search Code */}
          <section id="word-search-code" className="scroll-mt-24">
            <SectionTitle
              number="28"
              title="Code Word Search II"
              description="Implementation C kết hợp Trie, DFS và Backtracking."
            />

            <CodeBlock code={wordSearchTrieCode} />

            <CodeBlock code={wordSearchDfsCode} label="C · DFS + Trie" />

            <CodeBlock code={wordSearchFullCode} label="C · Full Example" />

            <Complexity
              time="Phụ thuộc board + Trie"
              space="O(T + H)"
              timeDescription="Trong worst case có thể phải khám phá rất nhiều đường đi."
              spaceDescription="T là số Node Trie, H là độ sâu DFS."
            />

            <InfoBox
              type="important"
              title="Mẹo quan trọng trong implementation"
            >
              Sau khi tìm được một Word, code đặt:
              <br />
              <br />
              <code>next-&gt;word = NULL</code>
              <br />
              <br />
              để cùng một Word không bị thêm nhiều lần vào kết quả khi có nhiều
              đường đi khác nhau.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Edge Cases */}
          <section id="edge-cases" className="scroll-mt-24">
            <SectionTitle
              number="29"
              title="Edge Cases"
              description="Trie có một số trường hợp đặc biệt cần kiểm tra kỹ."
            />

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Trie rỗng</h3>

                    <p className="mt-2 font-mono text-sm">root != NULL</p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Search bất kỳ từ nào chưa Insert → false.
                    </p>
                  </div>

                  <CheckCircle2 size={19} className="text-emerald-600" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">
                      Search Prefix nhưng không phải Word
                    </h3>

                    <p className="mt-2 font-mono text-sm">insert("apple")</p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      search("app") có thể false nhưng startsWith("app") là
                      true.
                    </p>
                  </div>

                  <CircleAlert size={19} className="text-amber-600" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">
                      Insert cùng một Word nhiều lần
                    </h3>

                    <p className="mt-2 font-mono text-sm">
                      insert("cat")
                      <br />
                      insert("cat")
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Không cần tạo thêm Node. Chỉ set End of Word = true.
                    </p>
                  </div>

                  <CheckCircle2 size={19} className="text-emerald-600" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Word dài hơn Prefix</h3>

                    <p className="mt-2 font-mono text-sm">
                      app
                      <br />
                      apple
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Node "p" có thể vừa là End of Word vừa có Child.
                    </p>
                  </div>

                  <GitBranch size={19} className="text-slate-500" />
                </div>
              </div>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Common Mistakes */}
          <section id="common-mistakes" className="scroll-mt-24">
            <SectionTitle
              number="30"
              title="Lỗi thường gặp"
              description="Những lỗi này xuất hiện rất nhiều khi tự implement Trie."
            />

            <div className="space-y-4">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">Quên khởi tạo children</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Pointer chưa được gán NULL có thể chứa địa chỉ rác.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">Quên isEndOfWord</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Khi đó bạn không phân biệt được Word hoàn chỉnh và Prefix.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">
                      Search trả true ngay khi đi hết String
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Phải kiểm tra End of Word.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">
                      Với '.', chỉ thử một Child
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Wildcard có thể match nhiều ký tự nên cần DFS qua nhiều
                      nhánh.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">
                      Word Search II nhưng không Backtrack
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Nếu không restore board sau DFS, các đường đi khác có thể
                      bị ảnh hưởng.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <InfoBox type="tip" title="Quy tắc vàng">
              Khi làm Trie, luôn hỏi:
              <br />
              <br />
              <strong>Node này đang đại diện cho Prefix nào?</strong>
              <br />
              <br />
              và:
              <br />
              <br />
              <strong>Prefix này đã phải là một Word hoàn chỉnh chưa?</strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Recognition */}
          <section id="recognition" className="scroll-mt-24">
            <SectionTitle
              number="31"
              title="Nhận diện Pattern Trie"
              description="Đây là phần quan trọng để biết khi nào nên nghĩ tới Trie."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <Search size={19} />
                </div>

                <h3 className="mt-4 text-xl font-bold">Prefix Search</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Keyword như prefix, startsWith, autocomplete, suggestions.
                </p>

                <p className="mt-5 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  startsWith(prefix)
                </p>
              </div>

              <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <TreePine size={19} />
                </div>

                <h3 className="mt-4 text-xl font-bold">Dictionary</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Lưu rất nhiều Word và cần kiểm tra Word tồn tại.
                </p>

                <p className="mt-5 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  insert / search
                </p>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Network size={19} />
                </div>

                <h3 className="mt-4 text-xl font-bold">Word Search</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Tìm nhiều String trên board, đặc biệt khi có thể prune theo
                  Prefix.
                </p>

                <p className="mt-5 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  Trie + DFS
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <GitBranch size={19} />
                </div>

                <h3 className="mt-4 text-xl font-bold">Wildcard Search</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Ký tự có thể match nhiều khả năng.
                </p>

                <p className="mt-5 rounded-xl bg-slate-50 p-3 font-mono text-sm">
                  "." → DFS
                </p>
              </div>
            </div>

            <InfoBox type="important" title="Câu hỏi nhận diện">
              Khi đề bài chứa các từ:
              <br />
              <br />
              <strong>
                prefix · word dictionary · autocomplete · startsWith · wildcard
                · search words
              </strong>
              <br />
              <br />
              hãy nghĩ tới Trie trước khi nghĩ tới cấu trúc khác.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Summary */}
          <section id="summary" className="scroll-mt-24">
            <SectionTitle
              number="32"
              title="Tổng kết Tries"
              description="Toàn bộ kiến thức từ Node đầu tiên tới Trie + DFS."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <TreePine size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Trie</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tree chuyên dùng để biểu diễn String và Prefix.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <GitBranch size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">children</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Lưu đường đi tới ký tự tiếp theo.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Check size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">End of Word</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Phân biệt Word hoàn chỉnh và Prefix.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Search size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Search</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Đi theo từng ký tự trong Trie.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Network size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">DFS</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Xuất hiện khi wildcard hoặc Word Search tạo nhiều nhánh.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Zap size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Pruning</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Trie giúp dừng sớm khi Prefix không tồn tại.
                </p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold">Ba bài NeetCode</h3>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[860px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Problem
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Pattern
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Ý tưởng chính
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Complexity
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                      Implement Trie
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      Trie
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                      Insert / Search / StartsWith
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      O(L)
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                      Design Add and Search Words
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      Trie + DFS
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                      "." có thể match nhiều Child
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      Worst ≈ O(26^L)
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-semibold">Word Search II</td>

                    <td className="px-5 py-4 font-mono">
                      Trie + DFS + Backtracking
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      Tìm nhiều Word trên Board + Prefix Pruning
                    </td>

                    <td className="px-5 py-4 font-mono">Board-dependent</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <InfoBox type="important" title="Mental model cuối cùng">
              Hãy nhớ Trie theo chuỗi:
              <br />
              <br />
              <strong>Root</strong>
              <br />
              ↓
              <br />
              <strong>Character</strong>
              <br />
              ↓
              <br />
              <strong>Prefix</strong>
              <br />
              ↓
              <br />
              <strong>End of Word</strong>
              <br />
              ↓
              <br />
              <strong>Search</strong>
              <br />
              ↓
              <br />
              <strong>Wildcard / DFS</strong>
              <br />
              ↓
              <br />
              <strong>Trie + DFS + Backtracking</strong>
            </InfoBox>

            <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Trie mental model
              </p>

              <h3 className="mt-3 text-2xl font-bold">Khi gặp bài String</h3>

              <div className="mt-7 space-y-2 font-mono text-sm leading-8 text-slate-300">
                <div>Có nhiều Word cần lưu?</div>
                <div>↓</div>
                <div>Các Word có chung Prefix?</div>
                <div>↓</div>
                <div>Có search theo Prefix?</div>
                <div>↓</div>
                <div>Trie</div>
                <div>↓</div>
                <div>Có wildcard / nhiều nhánh?</div>
                <div>↓</div>
                <div>Trie + DFS</div>
                <div>↓</div>
                <div>Có Board và cần thử nhiều đường?</div>
                <div>↓</div>
                <div className="text-emerald-300">
                  Trie + DFS + Backtracking
                </div>
              </div>
            </div> */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                to="/algorithms/trees"
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <ArrowLeft
                    size={18}
                    className="text-slate-400 transition-transform group-hover:-translate-x-1"
                  />

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Previous
                    </p>

                    <p className="mt-1 font-semibold">Tree</p>
                  </div>
                </div>
              </Link>

              <Link
                to="/algorithms"
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Finish
                  </p>

                  <p className="mt-1 font-semibold">Tất cả thuật toán</p>
                </div>

                <ArrowRight
                  size={18}
                  className="text-slate-400 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </section>
        </main>
      </div>
      {/* Mobile TOC */}
      <section className="border-t border-slate-200 bg-white lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <List size={14} />
            Nội dung
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition hover:border-slate-300 hover:bg-white hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>Algorithm Learning Lab</span>
          <span>Tries · Prefix · DFS · Backtracking</span>
        </div>
      </footer>
    </div>
  );
}

function RotateBackIcon() {
  return <ArrowLeft size={19} className="rotate-45" />;
}
