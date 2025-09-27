const { createElement, useEffect, useState } = React;
const { createRoot } = ReactDOM;

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState('checking');

  useEffect(() => {
    let isMounted = true;

    fetch('/api/health')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }

        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          setStatus(data.status || 'unknown');
        }
      })
      .catch(() => {
        if (isMounted) {
          setStatus('offline');
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return createElement(
    'main',
    { className: 'app' },
    createElement('h1', null, 'Hello from React!'),
    createElement(
      'p',
      { className: 'status' },
      'Server status: ',
      createElement(
        'span',
        {
          className: `status-pill status-pill--${status}`
        },
        status
      )
    ),
    createElement(
      'p',
      null,
      'This minimal React app is served by a simple Node server.'
    ),
    createElement(
      'button',
      {
        type: 'button',
        onClick: () => setCount((value) => value + 1)
      },
      `You clicked ${count} time${count === 1 ? '' : 's'}`
    )
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(createElement(App));
