import { memo, SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.2813 4.28221C11.9552 4.28221 10.6834 4.80899 9.74572 5.74667C8.80803 6.68436 8.28125 7.95613 8.28125 9.28221C8.28125 10.6083 8.80803 11.8801 9.74572 12.8177C10.6834 13.7554 11.9552 14.2822 13.2813 14.2822C14.6073 14.2822 15.8791 13.7554 16.8168 12.8177C17.7545 11.8801 18.2813 10.6083 18.2813 9.28221C18.2813 7.95613 17.7545 6.68436 16.8168 5.74667C15.8791 4.80899 14.6073 4.28221 13.2813 4.28221ZM5.78125 9.28221C5.7811 8.10184 6.05955 6.9381 6.59396 5.88563C7.12838 4.83317 7.90365 3.92171 8.85675 3.22536C9.80984 2.52902 10.9138 2.06747 12.0789 1.87825C13.244 1.68903 14.4374 1.77747 15.5618 2.1364C16.6863 2.49532 17.7102 3.11459 18.5502 3.94383C19.3902 4.77307 20.0227 5.78887 20.3961 6.90862C20.7695 8.02837 20.8733 9.22045 20.6992 10.3879C20.525 11.5553 20.0777 12.6652 19.3938 13.6272L25.415 19.6485C25.6427 19.8842 25.7687 20.2 25.7658 20.5277C25.763 20.8555 25.6315 21.169 25.3998 21.4007C25.168 21.6325 24.8545 21.764 24.5268 21.7668C24.199 21.7696 23.8833 21.6437 23.6475 21.416L17.6275 15.396C16.5055 16.1938 15.1854 16.6674 13.8121 16.7649C12.4388 16.8623 11.0651 16.5798 9.84163 15.9484C8.61816 15.317 7.59211 14.361 6.8759 13.1851C6.1597 12.0093 5.78098 10.659 5.78125 9.28221V9.28221Z'
      fill='#B0BABF'
    />
  </svg>
);
const Memo = memo(SearchIcon);
export { Memo as SearchIcon };
