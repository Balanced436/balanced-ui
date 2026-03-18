import { Typography } from "../src/main";

const SizingScale = () => {
  const sizes = [1, 2, 4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 64];

  return (
    <div>
      <Typography variant={"title-large"}>Sizing Scale</Typography>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {sizes.map((size) => (
          <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <code style={{ minWidth: '160px', fontWeight: 'bold' }}>
              --base-size-{size}
            </code>
            
            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <div style={{
                height: '20px',
                width: `var(--base-size-${size})`,
                backgroundColor: 'oklch(60% 0.15 250)',
                borderRadius: '2px',
                minWidth: size === 1 ? '1px' : 'auto'
              }} />
              <Typography variant="caption" style={{ marginLeft: '10px', fontSize: '0.8rem', color: '#999' }}>
                {size}px
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default {
  title: 'Tokens/Sizing',
  component: SizingScale,
};

export const Default = {};