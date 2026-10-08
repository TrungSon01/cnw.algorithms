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
  Layers,
  Lightbulb,
  List,
  RotateCcw,
  Target,
  X,
  Zap,
} from "lucide-react";

const toc = [
  {
    id: "introduction",
    label: "Stack là gì?",
  },
  {
    id: "lifo",
    label: "1. LIFO là gì?",
  },
  {
    id: "operations",
    label: "2. Các thao tác của Stack",
  },
  {
    id: "array-implementation",
    label: "3. Stack bằng Array",
  },
  {
    id: "complexity",
    label: "4. Complexity",
  },
  {
    id: "when-to-use",
    label: "5. Khi nào dùng Stack?",
  },
  {
    id: "valid-parentheses",
    label: "6. Valid Parentheses",
  },
  {
    id: "problem-understanding",
    label: "7. Hiểu đề bài",
  },
  {
    id: "brute-force",
    label: "8. Vì sao cách đơn giản chưa tốt?",
  },
  {
    id: "stack-solution",
    label: "9. Giải bằng Stack",
  },
  {
    id: "dry-run",
    label: "10. Dry Run",
  },
  {
    id: "solution-code",
    label: "11. Code C",
  },
  {
    id: "common-mistakes",
    label: "12. Lỗi thường gặp",
  },
  {
    id: "summary",
    label: "13. Tổng kết",
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
          <Layers size={15} />
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
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>

          <div className="mt-2 text-sm leading-7 text-slate-600">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

const stackBasicCode = `#include <stdio.h>

int main() {
int stack[5];
int top = -1;


// Push
stack[++top] = 10;
stack[++top] = 20;
stack[++top] = 30;

printf("%d\\n", stack[top]);

return 0;


}`;

const stackOperationsCode = `#include <stdio.h>

int main() {
int stack[5];
int top = -1;


// PUSH
stack[++top] = 10;
stack[++top] = 20;
stack[++top] = 30;

// PEEK
printf("Top: %d\\n", stack[top]);

// POP
top--;

printf("Top after pop: %d\\n", stack[top]);

return 0;


}`;

const stackImplementationCode = `#include <stdio.h>
#include <stdbool.h>

#define CAPACITY 5

typedef struct {
int items[CAPACITY];
int top;
} Stack;

void initStack(Stack* stack) {
stack->top = -1;
}

bool isEmpty(Stack* stack) {
return stack->top == -1;
}

bool isFull(Stack* stack) {
return stack->top == CAPACITY - 1;
}

void push(Stack* stack, int value) {
if (isFull(stack)) {
return;
}


stack->items[++stack->top] = value;


}

int pop(Stack* stack) {
if (isEmpty(stack)) {
return -1;
}


return stack->items[stack->top--];


}

int peek(Stack* stack) {
if (isEmpty(stack)) {
return -1;
}


return stack->items[stack->top];


}`;

const validParenthesesSimpleCode = `bool isValid(char* s) {
while (/* còn cặp ngoặc */) {


    if (/* là () */ ||
        /* là [] */ ||
        /* là {} */) {

        // Xóa cặp ngoặc hợp lệ
    }
}

return /* không còn ngoặc */;


}`;

const validParenthesesStackCode = `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

bool isValid(char* s) {
int n = strlen(s);


char* stack = malloc(n * sizeof(char));

int top = -1;

for (int i = 0; i < n; i++) {
    char c = s[i];

    // Nếu là ngoặc mở
    if (c == '(' ||
        c == '[' ||
        c == '{') {

        stack[++top] = c;
    }

    // Nếu là ngoặc đóng
    else {
        // Không có ngoặc mở để ghép
        if (top == -1) {
            free(stack);
            return false;
        }

        char open = stack[top--];

        if ((c == ')' && open != '(') ||
            (c == ']' && open != '[') ||
            (c == '}' && open != '{')) {

            free(stack);
            return false;
        }
    }
}

bool result = (top == -1);

free(stack);

return result;


}`;

const validParenthesesFixedStackCode = `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

bool isValid(char* s) {
int n = strlen(s);


char* stack = malloc(n * sizeof(char));
int top = -1;

for (int i = 0; i < n; i++) {
    char c = s[i];

    if (c == '(' ||
        c == '[' ||
        c == '{') {

        stack[++top] = c;
        continue;
    }

    if (top == -1) {
        free(stack);
        return false;
    }

    char open = stack[top--];

    if (c == ')' && open != '(') {
        free(stack);
        return false;
    }

    if (c == ']' && open != '[') {
        free(stack);
        return false;
    }

    if (c == '}' && open != '{') {
        free(stack);
        return false;
    }
}

bool valid = (top == -1);

free(stack);

return valid;


}`;

export default function Stack() {
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
              <Layers size={14} />
              NEETCODE · STACK{" "}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Stack
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Stack là một cấu trúc dữ liệu rất đơn giản nhưng xuất hiện trong
              rất nhiều bài toán thuật toán. Điều quan trọng nhất cần nhớ là
              nguyên tắc <strong>LIFO</strong>: phần tử được thêm vào sau cùng
              sẽ là phần tử được lấy ra đầu tiên.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Layers size={16} />
                LIFO
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <ArrowDown size={16} />
                Push / Pop
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
              title="Stack là gì?"
              description="Trước khi viết một dòng code, hãy hình dung Stack trong đời thực."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Hãy tưởng tượng một chồng đĩa.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Bạn đặt chiếc đĩa đầu tiên xuống bàn. Sau đó đặt chiếc thứ hai lên
              trên. Rồi chiếc thứ ba.
            </p>

            <div className="my-8 flex justify-center">
              <div className="flex w-64 flex-col-reverse gap-2">
                {[
                  {
                    value: "Đĩa 1",
                    width: "w-64",
                  },
                  {
                    value: "Đĩa 2",
                    width: "w-56",
                  },
                  {
                    value: "Đĩa 3",
                    width: "w-48",
                  },
                  {
                    value: "Đĩa 4",
                    width: "w-40",
                  },
                ].map((item) => (
                  <div
                    key={item.value}
                    className={`mx-auto ${item.width} rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold shadow-sm`}
                  >
                    {item.value}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Nếu muốn lấy một chiếc đĩa ra, bạn sẽ lấy chiếc nào?
            </p>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Câu trả lời
              </p>

              <p className="mt-3 text-2xl font-bold text-slate-900">Đĩa 4</p>

              <p className="mt-2 text-sm text-slate-500">
                Chiếc được đặt vào cuối cùng.
              </p>
            </div>

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Đây chính là ý tưởng của Stack.
            </p>

            <InfoBox type="important" title="Định nghĩa đơn giản nhất">
              <strong>
                Stack là cấu trúc dữ liệu hoạt động theo nguyên tắc LIFO.
              </strong>
              <br />
              <br />
              LIFO = <strong>Last In, First Out</strong>.
              <br />
              <br />
              Phần tử đi vào cuối cùng sẽ được lấy ra đầu tiên.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* LIFO */}
          <section id="lifo" className="scroll-mt-24">
            <SectionTitle
              number="01"
              title="LIFO là gì?"
              description="Đây là khái niệm quan trọng nhất của toàn bộ Stack."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              LIFO viết tắt của:
            </p>

            <div className="my-6 rounded-3xl border border-slate-200 bg-slate-950 p-7 text-center text-white">
              <p className="font-mono text-2xl font-bold">
                Last In → First Out
              </p>

              <p className="mt-3 text-sm text-slate-400">Vào sau → Ra trước</p>
            </div>

            <h3 className="text-xl font-bold">Ví dụ</h3>

            <div className="my-6 space-y-3">
              {[
                ["Push A", "A"],
                ["Push B", "B, A"],
                ["Push C", "C, B, A"],
              ].map(([action, state]) => (
                <div
                  key={action}
                  className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[160px_1fr]"
                >
                  <span className="font-mono text-sm font-semibold">
                    {action}
                  </span>

                  <span className="font-mono text-sm text-slate-600">
                    {state}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Sau khi Push A, B, C thì C nằm trên cùng. Nếu Pop một lần:
            </p>

            <div className="my-5 flex items-center justify-center gap-3">
              <div className="rounded-xl bg-slate-900 px-5 py-3 font-mono text-sm text-white">
                C
              </div>

              <ArrowRight size={17} className="text-slate-400" />

              <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-mono text-sm">
                removed
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">Stack còn lại:</p>

              <p className="mt-2 font-mono text-lg font-bold">B, A</p>
            </div>

            <InfoBox type="tip" title="Đừng nhầm LIFO với FIFO">
              <strong>LIFO:</strong> vào sau ra trước → Stack.
              <br />
              <strong>FIFO:</strong> vào trước ra trước → Queue.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Operations */}
          <section id="operations" className="scroll-mt-24">
            <SectionTitle
              number="02"
              title="Các thao tác của Stack"
              description="Stack về cơ bản chỉ xoay quanh một vài thao tác rất đơn giản."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <ArrowDown size={19} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Push</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Thêm một phần tử vào <strong>đỉnh Stack</strong>.
                </p>

                <p className="mt-4 rounded-xl bg-slate-50 p-4 font-mono text-sm">
                  push(10)
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <ArrowRight size={19} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Pop</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Lấy và xóa phần tử ở <strong>đỉnh Stack</strong>.
                </p>

                <p className="mt-4 rounded-xl bg-slate-50 p-4 font-mono text-sm">
                  pop()
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Target size={19} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Peek</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Xem phần tử ở đỉnh nhưng <strong>không xóa</strong> nó.
                </p>

                <p className="mt-4 rounded-xl bg-slate-50 p-4 font-mono text-sm">
                  peek()
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <CheckCircle2 size={19} />
                </div>

                <h3 className="mt-4 text-lg font-bold">isEmpty</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Kiểm tra Stack có đang rỗng hay không.
                </p>

                <p className="mt-4 rounded-xl bg-slate-50 p-4 font-mono text-sm">
                  isEmpty()
                </p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold">
              Hãy hình dung Stack như sau
            </h3>

            <div className="my-7 flex justify-center">
              <div className="w-56">
                <div className="mb-3 rounded-xl border-2 border-slate-900 bg-slate-900 p-3 text-center text-xs font-bold uppercase tracking-wider text-white">
                  TOP
                </div>

                {["30", "20", "10"].map((value) => (
                  <div
                    key={value}
                    className="mb-2 rounded-xl border border-slate-200 bg-white p-4 text-center font-mono font-bold"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-sm text-slate-500">
              Mọi thao tác quan trọng đều xảy ra ở phía TOP.
            </p>

            <CodeBlock code={stackOperationsCode} />
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Array Implementation */}
          <section id="array-implementation" className="scroll-mt-24">
            <SectionTitle
              number="03"
              title="Stack được xây dựng bằng Array như thế nào?"
              description="Đây là phần rất quan trọng nếu bạn muốn hiểu Stack thực sự hoạt động ra sao thay vì chỉ gọi push() và pop()."
            />

            <p className="text-sm leading-7 text-slate-600">
              Trong C, chúng ta có thể dùng một Array để lưu các phần tử của
              Stack.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Nhưng Array chỉ lưu dữ liệu. Chúng ta cần biết:
              <strong> đâu là phần tử trên cùng?</strong>
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Vì vậy chúng ta cần một biến:
            </p>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-mono text-xl font-bold">top</p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Lưu index của phần tử hiện tại ở trên cùng.
              </p>
            </div>

            <h3 className="text-xl font-bold">Khi Stack rỗng</h3>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-lg text-white">
              top = -1
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Tại sao là <code>-1</code>?
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Vì index nhỏ nhất của Array là 0. Nếu <code>top = -1</code>, điều
              đó có nghĩa là chưa có phần tử nào.
            </p>

            <h3 className="mt-8 text-xl font-bold">Push</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Khi Push một phần tử:
            </p>

            <div className="my-5 space-y-2">
              {["Tăng top lên 1.", "Lưu phần tử vào stack[top]."].map(
                (item, index) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <span className="font-mono font-bold">{index + 1}.</span>

                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ),
              )}
            </div>

            <CodeBlock code={`stack[++top] = value;`} />

            <h3 className="mt-8 text-xl font-bold">Pop</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">Khi Pop:</p>

            <div className="my-5 space-y-2">
              {["Đọc stack[top].", "Giảm top xuống 1."].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <span className="font-mono font-bold">{index + 1}.</span>

                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>

            <CodeBlock code={`int value = stack[top--];`} />

            <h3 className="mt-8 text-xl font-bold">Peek</h3>

            <CodeBlock code={`int value = stack[top];`} />

            <CodeBlock code={stackBasicCode} />

            <InfoBox type="important" title="Điểm cần hiểu">
              Stack không phải là một loại bộ nhớ đặc biệt.
              <br />
              <br />
              Stack chỉ là <strong>một cách tổ chức dữ liệu</strong> với quy tắc
              LIFO. Chúng ta hoàn toàn có thể dùng Array để xây dựng nó.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Complexity */}
          <section id="complexity" className="scroll-mt-24">
            <SectionTitle
              number="04"
              title="Complexity của Stack"
              description="Các thao tác cơ bản của Stack đều rất nhanh."
            />

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[620px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Operation
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Time
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Ý nghĩa
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["Push", "O(1)", "Thêm vào TOP"],
                    ["Pop", "O(1)", "Xóa khỏi TOP"],
                    ["Peek", "O(1)", "Xem TOP"],
                    ["isEmpty", "O(1)", "Kiểm tra rỗng"],
                  ].map(([operation, time, meaning]) => (
                    <tr key={operation}>
                      <td className="border-b border-slate-100 px-5 py-4 font-mono font-semibold">
                        {operation}
                      </td>

                      <td className="border-b border-slate-100 px-5 py-4 font-mono">
                        {time}
                      </td>

                      <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                        {meaning}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Complexity
              time="O(1)"
              space="O(n)"
              timeDescription="Các thao tác cơ bản chỉ làm việc với TOP."
              spaceDescription="Trong trường hợp xấu nhất Stack chứa n phần tử."
            />

            <InfoBox type="tip" title="Tại sao Push và Pop là O(1)?">
              Vì chúng ta không cần di chuyển tất cả phần tử. Chỉ cần thay đổi
              <strong> top</strong> và đọc hoặc ghi đúng một vị trí.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* When to use */}
          <section id="when-to-use" className="scroll-mt-24">
            <SectionTitle
              number="05"
              title="Khi nào nên nghĩ tới Stack?"
              description="Đây mới là kỹ năng quan trọng khi làm bài thuật toán."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Đừng cố học thuộc rằng "bài này dùng Stack". Hãy học cách nhận
              diện tình huống.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <StepCard number="01" title="Cặp mở / đóng">
                Ví dụ: <code>() [] {"{}"}</code>. Một phần tử mở cần được ghép
                với phần tử đóng đúng loại.
              </StepCard>

              <StepCard number="02" title="Undo / History">
                Thao tác mới nhất thường cần được hoàn tác trước.
              </StepCard>

              <StepCard number="03" title="Nested structure">
                Các cấu trúc lồng nhau thường có tính chất LIFO.
              </StepCard>

              <StepCard number="04" title="Monotonic Stack">
                Cần tìm phần tử lớn hơn hoặc nhỏ hơn gần nhất phía trước hoặc
                phía sau.
              </StepCard>
            </div>

            <InfoBox type="tip" title="Một dấu hiệu rất mạnh">
              Nếu đề bài có cấu trúc kiểu:
              <br />
              <br />
              <strong>"Phần tử gần nhất chưa được xử lý..."</strong>
              <br />
              <strong>"Ghép cặp mở và đóng..."</strong>
              <br />
              <strong>"Xử lý phần tử mới nhất trước..."</strong>
              <br />
              <br />
              hãy thử nghĩ tới Stack.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Valid Parentheses */}
          <section id="valid-parentheses" className="scroll-mt-24">
            <SectionTitle
              number="06"
              title="Valid Parentheses"
              description="Đây là bài toán kinh điển nhất để học Stack."
            />

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Problem
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight">
                    Valid Parentheses
                  </h3>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  Easy
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Cho một chuỗi chỉ gồm các ký tự:
              </p>

              <div className="my-5 flex flex-wrap gap-3">
                {["(", ")", "[", "]", "{", "}"].map((char) => (
                  <span
                    key={char}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 font-mono text-lg font-bold"
                  >
                    {char}
                  </span>
                ))}
              </div>

              <p className="text-sm leading-7 text-slate-600">
                Kiểm tra xem các dấu ngoặc có được đóng đúng cách hay không.
              </p>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Problem Understanding */}
          <section id="problem-understanding" className="scroll-mt-24">
            <SectionTitle
              number="07"
              title="Hiểu đề bài thật kỹ"
              description="Trước khi nghĩ tới Stack, chúng ta phải hiểu thế nào là một chuỗi ngoặc hợp lệ."
            />

            <h3 className="text-xl font-bold">Ba loại ngoặc</h3>

            <div className="my-6 grid gap-3 sm:grid-cols-3">
              {[
                ["(", ")", "Parentheses"],
                ["[", "]", "Brackets"],
                ["{", "}", "Braces"],
              ].map(([open, close, name]) => (
                <div
                  key={name}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center"
                >
                  <div className="flex items-center justify-center gap-3 font-mono text-2xl font-bold">
                    <span>{open}</span>

                    <ArrowRight size={17} className="text-slate-400" />

                    <span>{close}</span>
                  </div>

                  <p className="mt-3 text-xs text-slate-500">{name}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-bold">
              Khi nào một chuỗi hợp lệ?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Có ba nguyên tắc cần thỏa mãn:
            </p>

            <div className="mt-5 space-y-3">
              <StepCard number="01" title="Phải có cặp tương ứng">
                Mỗi ngoặc mở phải có một ngoặc đóng cùng loại.
              </StepCard>

              <StepCard number="02" title="Đúng thứ tự">
                Nếu mở <code>(</code> thì phải đóng bằng <code>)</code>, không
                thể đóng bằng <code>]</code>.
              </StepCard>

              <StepCard number="03" title="Đúng thứ tự lồng nhau">
                Nếu mở <code>([</code> thì phải đóng <code>])</code>, không phải
                <code>)]</code>.
              </StepCard>
            </div>

            <h3 className="mt-8 text-xl font-bold">Ví dụ hợp lệ</h3>

            <div className="my-5 grid gap-3 sm:grid-cols-2">
              {[
                ["()", true],
                ["()[]{}", true],
                ["{[]}", true],
                ["([])", true],
              ].map(([value]) => (
                <div
                  key={value}
                  className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 p-4"
                >
                  <span className="font-mono text-lg font-bold">{value}</span>

                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                    <CheckCircle2 size={17} />
                    Valid
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-bold">Ví dụ không hợp lệ</h3>

            <div className="my-5 grid gap-3 sm:grid-cols-2">
              {[
                ["(]", "Sai loại ngoặc"],
                ["([)]", "Sai thứ tự đóng"],
                ["{", "Thiếu ngoặc đóng"],
                ["]", "Không có ngoặc mở tương ứng"],
              ].map(([value, reason]) => (
                <div
                  key={value}
                  className="flex items-start justify-between gap-4 rounded-xl border border-red-200 bg-red-50 p-4"
                >
                  <div>
                    <p className="font-mono text-lg font-bold">{value}</p>

                    <p className="mt-1 text-xs text-red-700">{reason}</p>
                  </div>

                  <X size={19} className="shrink-0 text-red-500" />
                </div>
              ))}
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Brute Force */}
          <section id="brute-force" className="scroll-mt-24">
            <SectionTitle
              number="08"
              title="Cách đơn giản nhất nhưng chưa tốt"
              description="Trước khi tìm lời giải tối ưu, hãy xem một cách suy nghĩ tự nhiên."
            />

            <p className="text-sm leading-7 text-slate-600">Nếu nhìn vào:</p>

            <div className="my-5 rounded-2xl bg-white border border-slate-200 p-5 text-center font-mono text-xl font-bold">
              ([{"{"}
              {"}"}])
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Chúng ta có thể nghĩ:
            </p>

            <div className="my-5 space-y-3">
              {[
                "Tìm những cặp () rồi xóa chúng.",
                "Tìm những cặp [] rồi xóa chúng.",
                "Tìm những cặp {} rồi xóa chúng.",
                "Lặp lại cho tới khi không còn cặp nào.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <span className="font-mono font-bold text-slate-400">
                    {index + 1}
                  </span>

                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Ý tưởng này có thể hoạt động, nhưng việc xóa và tìm kiếm lại nhiều
              lần khiến code phức tạp và có thể dẫn tới O(n²).
            </p>

            <CodeBlock code={validParenthesesSimpleCode} />

            <InfoBox title="Câu hỏi quan trọng">
              Có cách nào để khi gặp một ngoặc đóng, chúng ta biết ngay{" "}
              <strong>ngoặc mở gần nhất chưa được ghép</strong> là gì không?
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Stack Solution */}
          <section id="stack-solution" className="scroll-mt-24">
            <SectionTitle
              number="09"
              title="Tại sao Stack giải quyết được bài này?"
              description="Hãy xem chính cấu trúc của bài toán đang yêu cầu điều gì."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Xét chuỗi:
            </p>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 text-center font-mono text-2xl font-bold">
              ([{"{"}
              {"}"}])
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Khi đi từ trái sang phải:
            </p>

            <div className="my-7 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-mono text-lg font-bold">(</p>

                <p className="mt-2 text-sm text-slate-500">
                  Đây là ngoặc mở → lưu lại.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-mono text-lg font-bold">[</p>

                <p className="mt-2 text-sm text-slate-500">
                  Ngoặc mở → tiếp tục lưu.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-mono text-lg font-bold">{"{"}</p>

                <p className="mt-2 text-sm text-slate-500">
                  Ngoặc mở → tiếp tục lưu.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-mono text-lg font-bold">{"}"}</p>

                <p className="mt-2 text-sm text-emerald-700">
                  Ngoặc đóng → phải khớp với ngoặc mở gần nhất.
                </p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Ngoặc mở gần nhất chính là:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-lg text-white">
              {"{"}
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Đây chính xác là phần tử ở <strong>TOP của Stack</strong>.
            </p>

            <InfoBox type="important" title="Đây chính là lý do chọn Stack">
              Bài toán yêu cầu:
              <br />
              <br />
              <strong>
                "Mỗi ngoặc đóng phải khớp với ngoặc mở gần nhất chưa được xử
                lý."
              </strong>
              <br />
              <br />
              "Gần nhất" + "chưa xử lý" tạo ra thứ tự LIFO.
            </InfoBox>

            <h3 className="mt-8 text-xl font-bold">Quy tắc của thuật toán</h3>

            <div className="mt-5 space-y-3">
              <StepCard number="01" title="Gặp ngoặc mở">
                Push nó vào Stack.
              </StepCard>

              <StepCard number="02" title="Gặp ngoặc đóng">
                Nếu Stack rỗng → không hợp lệ.
              </StepCard>

              <StepCard number="03" title="Lấy TOP">
                Pop ngoặc mở gần nhất.
              </StepCard>

              <StepCard number="04" title="So sánh">
                Nếu không đúng loại ngoặc → không hợp lệ.
              </StepCard>

              <StepCard number="05" title="Kết thúc">
                Stack phải rỗng. Nếu còn ngoặc mở → không hợp lệ.
              </StepCard>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Dry Run */}
          <section id="dry-run" className="scroll-mt-24">
            <SectionTitle
              number="10"
              title="Dry Run"
              description="Hãy chạy thuật toán bằng tay trước khi nhìn vào code."
            />

            <h3 className="text-xl font-bold">Ví dụ 1 — {`"{[()]}"`}</h3>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[700px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Char
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Action
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Stack
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Result
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["{", "Push", "{", "Continue"],
                    ["[", "Push", "{ [", "Continue"],
                    ["(", "Push", "{ [ (", "Continue"],
                    [")", "Pop (", "{ [", "Match"],
                    ["]", "Pop [", "{", "Match"],
                    ["}", "Pop {", "Empty", "Match"],
                  ].map(([char, action, stack, result]) => (
                    <tr key={`${char}-${action}`}>
                      <td className="border-b border-slate-100 px-4 py-4 font-mono text-lg font-bold">
                        {char}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 text-slate-600">
                        {action}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {stack}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4">
                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                          {result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={19} className="text-emerald-600" />

                <p className="text-sm font-semibold text-emerald-800">
                  Stack rỗng → chuỗi hợp lệ.
                </p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold">Ví dụ 2 — {`"([)]"`}</h3>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[700px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Char
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Action
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Stack
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Result
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["(", "Push", "(", "Continue"],
                    ["[", "Push", "( [", "Continue"],
                    [")", "Pop [", "(", "Mismatch"],
                  ].map(([char, action, stack, result]) => (
                    <tr key={`${char}-${action}`}>
                      <td className="border-b border-slate-100 px-4 py-4 font-mono text-lg font-bold">
                        {char}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 text-slate-600">
                        {action}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {stack}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4">
                        <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
                          {result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <InfoBox type="important" title="Sai ở đâu?">
              Khi gặp <code>)</code>, Stack đang có <code>[</code> ở TOP.
              <br />
              <br />
              Nhưng <code>)</code> phải ghép với <code>(</code>.
              <br />
              <br />
              Vì vậy trả về <strong>false</strong> ngay lập tức.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Solution Code */}
          <section id="solution-code" className="scroll-mt-24">
            <SectionTitle
              number="11"
              title="Code C hoàn chỉnh"
              description="Đây là cách cài đặt trực tiếp Stack bằng Array để giải Valid Parentheses."
            />

            <CodeBlock code={validParenthesesStackCode} />

            <h3 className="mt-8 text-xl font-bold">Đọc code từng phần</h3>

            <div className="mt-5 space-y-5">
              <div>
                <p className="font-mono text-sm font-bold">int top = -1;</p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Stack ban đầu rỗng.
                </p>
              </div>

              <div>
                <p className="font-mono text-sm font-bold">
                  {"if (c == '(' || c == '[' || c == '{')"}
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Nếu ký tự hiện tại là ngoặc mở, chúng ta chưa thể biết nó sẽ
                  được đóng lúc nào nên phải lưu lại.
                </p>
              </div>

              <div>
                <p className="font-mono text-sm font-bold">stack[++top] = c;</p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Push ngoặc mở vào TOP.
                </p>
              </div>

              <div>
                <p className="font-mono text-sm font-bold">if (top == -1)</p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Nếu gặp ngoặc đóng nhưng Stack rỗng, nghĩa là không có ngoặc
                  mở nào để ghép.
                </p>
              </div>

              <div>
                <p className="font-mono text-sm font-bold">
                  char open = stack[top--];
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Lấy ngoặc mở gần nhất ra khỏi Stack.
                </p>
              </div>

              <div>
                <p className="font-mono text-sm font-bold">
                  if ((c == ')' && open != '(') ...)
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Kiểm tra ngoặc mở và ngoặc đóng có cùng loại hay không.
                </p>
              </div>

              <div>
                <p className="font-mono text-sm font-bold">
                  bool result = (top == -1);
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Nếu duyệt hết chuỗi mà Stack vẫn còn phần tử, nghĩa là còn
                  ngoặc mở chưa được đóng.
                </p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold">
              Một phiên bản code dễ đọc hơn
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Khi học, bạn có thể ưu tiên viết code rõ ràng trước rồi sau đó mới
              rút gọn.
            </p>

            <CodeBlock code={validParenthesesFixedStackCode} />

            <Complexity
              time="O(n)"
              space="O(n)"
              timeDescription="Mỗi ký tự chỉ được duyệt đúng một lần."
              spaceDescription="Trong trường hợp xấu nhất toàn bộ n ký tự là ngoặc mở."
            />

            <InfoBox type="tip" title="Điểm tối ưu quan trọng">
              Ngay khi phát hiện một cặp không hợp lệ, chúng ta{" "}
              <strong>return false ngay</strong>. Không cần duyệt tiếp phần còn
              lại.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Common Mistakes */}
          <section id="common-mistakes" className="scroll-mt-24">
            <SectionTitle
              number="12"
              title="Các lỗi thường gặp"
              description="Đây là những lỗi người mới rất dễ mắc khi giải Valid Parentheses."
            />

            <div className="space-y-4">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={20} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Chỉ đếm số lượng ngoặc
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Ví dụ <code>([)]</code> có số lượng ngoặc mở và đóng cân
                      bằng nhưng vẫn sai thứ tự. Vì vậy chỉ counting là chưa đủ.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={20} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Không kiểm tra Stack rỗng
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Chuỗi bắt đầu bằng <code>)</code> thì không có gì để Pop.
                      Cần kiểm tra <code>top == -1</code> trước.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={20} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Duyệt xong nhưng không kiểm tra Stack
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Ví dụ <code>((</code> không có ngoặc đóng. Nếu chỉ kiểm
                      tra mismatch trong lúc duyệt thì có thể trả về sai. Cuối
                      cùng Stack phải rỗng.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex gap-4">
                  <Lightbulb
                    size={20}
                    className="mt-0.5 shrink-0 text-amber-600"
                  />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Pop trước rồi mới kiểm tra
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Trong code cần đọc TOP và kiểm tra nó có khớp không. Nếu
                      mismatch thì trả về false ngay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Summary */}
          <section id="summary" className="scroll-mt-24">
            <SectionTitle
              number="13"
              title="Tổng kết Stack"
              description="Nếu chỉ nhớ một vài điều sau trang này, hãy nhớ những điều dưới đây."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Layers size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">LIFO</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Last In, First Out. Phần tử vào sau cùng được xử lý trước.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <ArrowDown size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">TOP</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Push, Pop và Peek đều làm việc tại TOP.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Clock3 size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">O(1)</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Push, Pop, Peek đều có thể thực hiện trong O(1).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Target size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Matching</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Cặp mở/đóng và nested structure là dấu hiệu rất mạnh để nghĩ
                  tới Stack.
                </p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold">
              Pattern của Valid Parentheses
            </h3>

            <div className="my-6 grid gap-3 sm:grid-cols-4">
              {[
                ["1", "Gặp mở", "Push"],
                ["2", "Gặp đóng", "Peek / Pop"],
                ["3", "Không match", "False"],
                ["4", "Kết thúc", "Stack rỗng"],
              ].map(([number, title, action]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 font-mono text-xs font-bold text-white">
                    {number}
                  </div>

                  <p className="mt-3 font-semibold text-slate-900">{title}</p>

                  <p className="mt-1 font-mono text-sm text-slate-500">
                    {action}
                  </p>
                </div>
              ))}
            </div>

            <InfoBox
              type="important"
              title="Điều quan trọng nhất cần mang sang bài khác"
            >
              Khi gặp một bài toán, đừng hỏi ngay:
              <strong> "Đây có phải bài Stack không?"</strong>
              <br />
              <br />
              Hãy hỏi:
              <br />
              <strong>
                "Tôi có cần xử lý phần tử gần nhất chưa được xử lý trước không?"
              </strong>
              <br />
              <br />
              Nếu câu trả lời là có, Stack có thể là một ứng viên rất mạnh.
            </InfoBox>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Layers size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Mental model
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Ghi nhớ Stack bằng một câu
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-300">
                    <strong className="text-white">
                      "Thứ gì mới nhất mà tôi chưa xử lý?"
                    </strong>
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5 font-mono text-sm leading-8 text-slate-300">
                push(open)
                <br />
                ↓
                <br />
                gặp close
                <br />
                ↓
                <br />
                lấy open gần nhất
                <br />
                ↓
                <br />
                kiểm tra match
                <br />
                ↓
                <br />
                Stack rỗng = valid
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/algorithms/array-hashing"
                className="group flex flex-1 items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
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

                    <p className="mt-1 font-semibold">Array & Hashing</p>
                  </div>
                </div>
              </a>

              <a
                href="/algorithms/two-pointer"
                className="group flex flex-1 items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Next
                  </p>

                  <p className="mt-1 font-semibold">Two Pointer</p>
                </div>

                <ArrowRight
                  size={18}
                  className="text-slate-400 transition-transform group-hover:translate-x-1"
                />
              </a>
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
          <span>Stack · Valid Parentheses</span>
        </div>
      </footer>
    </div>
  );
}
